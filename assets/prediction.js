// Prediction form: the learner commits answers before any reveal, then copies
// them to paste to the agent for critique. Drafts persist per page in
// localStorage when available; the page works without it.
//
// Markup:
//   <form class="prediction" data-key="0001-exercise-1-1" data-title="Exercise 1.1">
//     <label>Question <span class="hint">hint</span>
//       <textarea name="q1"></textarea></label>
//   </form>

(function () {
  function storageGet(key) {
    try {
      return JSON.parse(localStorage.getItem(key) || "{}");
    } catch {
      return {};
    }
  }

  function storageSet(key, value) {
    try {
      localStorage.setItem(key, JSON.stringify(value));
    } catch {
      // Private mode or blocked storage: drafts just won't persist.
    }
  }

  function setup(form) {
    const key = `prediction:${form.dataset.key}`;
    const fields = Array.from(form.querySelectorAll("textarea"));
    const saved = storageGet(key);
    fields.forEach((f) => {
      if (saved[f.name]) f.value = saved[f.name];
      f.addEventListener("input", () => {
        const next = storageGet(key);
        next[f.name] = f.value;
        storageSet(key, next);
      });
    });

    const actions = document.createElement("div");
    actions.className = "prediction-actions";
    const button = document.createElement("button");
    button.type = "button";
    button.textContent = "Copy answers for the agent";
    const status = document.createElement("span");
    status.className = "prediction-status";
    actions.append(button, status);
    form.appendChild(actions);

    button.addEventListener("click", async () => {
      const lines = [`${form.dataset.title || "Predictions"}`, ""];
      fields.forEach((f) => {
        const label = f.closest("label");
        const question = label ? label.firstChild.textContent.trim() : f.name;
        lines.push(`${question}`, f.value.trim() || "(blank)", "");
      });
      const text = lines.join("\n");
      try {
        await navigator.clipboard.writeText(text);
        status.textContent = "Copied. Paste it into the chat.";
      } catch {
        status.textContent = "Couldn't copy; select the text above by hand.";
      }
    });
  }

  document.querySelectorAll("form.prediction").forEach(setup);
})();

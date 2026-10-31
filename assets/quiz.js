// Single-choice quiz with immediate feedback.
//
// Markup:
//   <div class="quiz" data-options="Event|Behavior|Structure">
//     <div class="quiz-item" data-answer="Event">
//       <p>Prompt…</p>
//       <div class="why">Explanation shown after answering.</div>
//     </div>
//   </div>
//   <p class="quiz-score" data-for="quiz-id"></p>
//
// A quiz-item may override the shared options with its own data-options.
// Keep every option the same length so formatting never hints at the answer.

(function () {
  function setup(quiz) {
    const shared = (quiz.dataset.options || "").split("|").filter(Boolean);
    const items = Array.from(quiz.querySelectorAll(".quiz-item"));
    const score = document.querySelector(`.quiz-score[data-for="${quiz.id}"]`);
    let answered = 0;
    let correct = 0;

    function updateScore() {
      if (!score) return;
      score.textContent =
        answered === items.length
          ? `Score: ${correct} / ${items.length}. Get any wrong? Ask the agent why before moving on.`
          : `${answered} of ${items.length} answered`;
    }

    items.forEach((item) => {
      const options = item.dataset.options
        ? item.dataset.options.split("|")
        : shared;
      const why = item.querySelector(".why");
      if (why) why.hidden = true;

      const row = document.createElement("div");
      row.className = "quiz-options";
      const feedback = document.createElement("div");
      feedback.className = "quiz-feedback";

      options.forEach((label) => {
        const button = document.createElement("button");
        button.type = "button";
        button.textContent = label;
        button.addEventListener("click", () => {
          const isRight = label === item.dataset.answer;
          row.querySelectorAll("button").forEach((b) => {
            b.disabled = true;
            if (b.textContent === item.dataset.answer)
              b.classList.add("correct");
          });
          if (!isRight) button.classList.add("wrong");
          feedback.textContent = isRight
            ? "Correct."
            : `Not quite. It's ${item.dataset.answer}.`;
          if (why) {
            why.hidden = false;
            feedback.appendChild(document.createTextNode(" "));
            feedback.appendChild(why);
          }
          answered += 1;
          if (isRight) correct += 1;
          updateScore();
        });
        row.appendChild(button);
      });

      item.appendChild(row);
      item.appendChild(feedback);
    });

    updateScore();
  }

  document.querySelectorAll(".quiz").forEach(setup);
})();

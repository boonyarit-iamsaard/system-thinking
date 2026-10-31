#!/usr/bin/env bash
# PostToolUse hook: format the file Claude just wrote with the project's prettier + markdownlint.
set -euo pipefail

root="${CLAUDE_PROJECT_DIR:-$(cd "$(dirname "$0")/../.." && pwd)}"
file="$(jq -r '.tool_response.filePath // .tool_input.file_path // empty')"

# Only touch files inside this project that the tools handle.
[[ -n "$file" && "$file" == "$root"/* && -f "$file" ]] || exit 0
[[ "$file" =~ \.(md|json|ya?ml|html|css|js)$ ]] || exit 0
[[ -x "$root/node_modules/.bin/prettier" ]] || exit 0

cd "$root"
# Exit 2 hands the error back to the agent so it fixes what the tools can't.
if ! out="$(node_modules/.bin/prettier --write --log-level warn "$file" 2>&1)"; then
  echo "prettier failed on $file:"$'\n'"$out" >&2
  exit 2
fi
if [[ "$file" == *.md ]] && ! out="$(node_modules/.bin/markdownlint --fix "$file" 2>&1)"; then
  echo "markdownlint issues remain in $file (fix by hand):"$'\n'"$out" >&2
  exit 2
fi

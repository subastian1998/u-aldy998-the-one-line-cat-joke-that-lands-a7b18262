import { mkdirSync, writeFileSync } from "node:fs";

const joke =
  "My cat walked across my laptop during my job interview, and the hiring manager said she had the most experience on the call.";

// Gate self-check (RULES.txt): UTF-8 text, 1 to 200 characters, not only whitespace.
if (joke.length < 1 || joke.length > 200 || joke.trim().length === 0) {
  throw new Error(`entry fails gate: ${joke.length} characters`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", joke, "utf8");

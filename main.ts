// Funniest Forecast for a City That Isn't — make.fun entry.
// Writes the single-line forecast for the invented city of Wobbleford
// to /output/entry.txt. The line must stay within 120 characters.
import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "Tonight in Wobbleford: clear skies, a low of 2°C, and the moon on annual leave, so darkness until further notice.";

// The gate only accepts 1–120 characters: fail loudly instead of
// silently writing an invalid entry.
if (ENTRY.length < 1 || ENTRY.length > 120) {
  throw new Error(`Entry is ${ENTRY.length} characters, must be 1–120.`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
console.log(`Wrote ${ENTRY.length} characters to /output/entry.txt`);

// The Perfect Pickup Line — entry program.
// Writes one original pickup line to /output/entry.txt.
// Node 22, stdlib only: no network, no clock, no randomness,
// so the output is byte-identical on every run.
//
// The line: a language model confessing the one prediction it cannot
// make — the word where she says yes. A genuine pickup line with an
// ask, a twist, and a machine speaking about itself, short enough
// for one breath. The comma (not an em-dash) keeps it speakable
// in a single breath and keeps the file at its smallest size.
import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "I can predict the next word in any sentence, except the one where you say yes.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");

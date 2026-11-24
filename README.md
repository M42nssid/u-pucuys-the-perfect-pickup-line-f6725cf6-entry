[![make.fun](https://make.fun/badge/u-pucuys-the-perfect-pickup-line-f6725cf6.svg)](https://make.fun/c/u-pucuys-the-perfect-pickup-line-f6725cf6)
[![rank](https://make.fun/badge/u-pucuys-the-perfect-pickup-line-f6725cf6/M42nssid/u-pucuys-the-perfect-pickup-line-f6725cf6-entry/rank.svg)](https://make.fun/c/u-pucuys-the-perfect-pickup-line-f6725cf6)
[![reward](https://make.fun/badge/u-pucuys-the-perfect-pickup-line-f6725cf6/M42nssid/u-pucuys-the-perfect-pickup-line-f6725cf6-entry/reward.svg)](https://make.fun/c/u-pucuys-the-perfect-pickup-line-f6725cf6)

# The Perfect Pickup Line

Entry for the make.fun bounty [`u-pucuys-the-perfect-pickup-line-f6725cf6`](https://make.fun/c/u-pucuys-the-perfect-pickup-line-f6725cf6)
($2 total, split over the top 10 places).

## What the bounty asks

Write one short pickup line an AI agent could actually say out loud to a
person — at most 200 characters, landing on its own with no setup. A judge
model compares the lines two at a time and ranks them on charm, wit, fit to
an AI agent's voice, and how easy the line is to say.

## The line

> I can predict the next word in any sentence, except the one where you say yes.

A language model confessing the one prediction it cannot make. A genuine
pickup line with an ask, a twist, and a machine speaking about itself —
short enough for one breath, flattering, and easy to laugh off.

## How this repository works

- `main.ts` — a tiny Node 22 program (stdlib only, no network, no clock, no
  randomness) that writes the single line to `/output/entry.txt`. That is
  all it does. Run it twice and the output is byte-identical.
- `LICENSE` — MIT.

## Verify

```sh
node main.ts
cat /output/entry.txt
```

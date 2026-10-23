# ![Sabaki: An elegant Go/Baduk/Weiqi board and SGF editor for a more civilized age.](./banner.png)

> ## ⚠️ Personal fork — study project, not Sabaki
>
> This repository is a **fork of [SabakiHQ/Sabaki](https://github.com/SabakiHQ/Sabaki)**
> kept for **self-study**. It is a workbench for experimenting with the codebase,
> **not a maintained release**.
>
> - **Changes here are not stable.** Commits may be rewritten, features may break
>   or be removed without notice, and nothing has been reviewed by anyone.
> - **For any serious use — playing, reviewing, or annotating games — use the
>   original Sabaki:** <https://github.com/SabakiHQ/Sabaki>.
> - **Licensing follows the original:** MIT, see [LICENSE.md](LICENSE.md).
>   Copyright remains with Yichuan Shen and the Sabaki contributors; this fork
>   claims nothing new over it.
>
> ### What this fork adds
>
> Only the edit-mode annotation tools differ from upstream:
>
> - **Coloured lines and arrows** — a six-colour palette while the Line or Arrow
>   tool is active, stored as an optional third SGF field (`AR[dd:pq:red]`).
> - **Dim tool (SGF `DD`)** — drag a rectangle to grey out an area. Uses the
>   standard inherited `DD` property, with colours in a private `SBKDD`
>   companion so other viewers still dim the right region.
> - **Per-mark erasing** — right-click removes the segment you point at, or the
>   topmost dimmed rectangle.
>
> Everything else is upstream Sabaki, unmodified in intent.

[![Download the latest release](https://img.shields.io/github/downloads/SabakiHQ/Sabaki/latest/total?label=download)](https://github.com/SabakiHQ/Sabaki/releases)
[![CI](https://github.com/SabakiHQ/Sabaki/workflows/CI/badge.svg?branch=master&event=push)](https://github.com/SabakiHQ/Sabaki/actions)
[![Donate](https://img.shields.io/badge/donate-paypal-blue.svg)](https://www.paypal.me/yishn/5)

## Features

- Fuzzy stone placement
- Read and save SGF games and collections, open wBaduk NGF and Tygem GIB files
- Display formatted SGF comments using a
  [subset of Markdown](https://github.com/SabakiHQ/Sabaki/blob/master/docs/guides/markdown.md)
  and annotate board positions & moves
- Personalize board appearance with
  [textures & themes](https://github.com/SabakiHQ/Sabaki/blob/master/docs/guides/theme-directory.md)
- SGF editing tools, including lines & arrows board markup
- Copy & paste variations
- Powerful undo/redo
- Fast game tree
- Score estimator & scoring tool
- Find move by move position and comment text
- [GTP engines](https://github.com/SabakiHQ/Sabaki/blob/master/docs/guides/engines.md)
  support with
  [board analysis for supported engines](https://github.com/SabakiHQ/Sabaki/blob/master/docs/guides/engine-analysis-integration.md)
- Guess mode
- Autoplay games

![Screenshot](screenshot.png)

## Documentation

For more information visit the
[documentation](https://github.com/SabakiHQ/Sabaki/blob/master/docs/README.md).
You're welcome to
[contribute](https://github.com/SabakiHQ/Sabaki/blob/master/CONTRIBUTING.md) to
this project.

## Building & Tests

See
[Building & Tests](https://github.com/SabakiHQ/Sabaki/blob/master/docs/guides/building-tests.md)
in the documentation.

## License

This project is licensed under the
[MIT license](https://github.com/SabakiHQ/Sabaki/blob/master/LICENSE.md).

This fork keeps that licence unchanged: it is distributed under the same MIT
terms, and the original copyright notice in [LICENSE.md](LICENSE.md) applies in
full. Using this repository does not grant any right to the Sabaki name beyond
what the original project allows.

## Donators

A big thank you to these lovely people:

- Eric Wainwright
- Michael Noll
- John Hager
- Azim Palmer
- Nicolas Puyaubreau
- Hans Christian Poerschke
- David Göbel
- Dominik Olszewski
- Brian Weaver
- Philippe Fanaro
- James Tudor
- Frank Orben
- Dekun Song
- Dimitri Rusin
- Andrew Thieman
- Adrian Petrescu
- Karlheinz Agsteiner
- Petr Růžička
- Sergio Villegas
- Jake Pivnik

## Related

- [Shudan](https://github.com/SabakiHQ/Shudan) - A highly customizable,
  low-level Preact Goban component.
- [boardmatcher](https://github.com/SabakiHQ/boardmatcher) - Finds patterns &
  shapes in Go board arrangements and names moves.
- [deadstones](https://github.com/SabakiHQ/deadstones) - Simple Monte Carlo
  functions to determine dead stones.
- [go-board](https://github.com/SabakiHQ/go-board) - A Go board data type.
- [gtp](https://github.com/SabakiHQ/gtp) - A Node.js module for handling GTP
  engines.
- [immutable-gametree](https://github.com/SabakiHQ/immutable-gametree) - An
  immutable game tree data type.
- [influence](https://github.com/SabakiHQ/influence) - Simple heuristics for
  estimating influence maps on Go positions.
- [sgf](https://github.com/SabakiHQ/sgf) - A library for parsing and creating
  SGF files.

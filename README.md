<p align="center">
  <img src="logo.png" alt="Logo" width="250" height="auto" />
</p>

<h1 align="center">@appsweet-co/ts-utils</h1>

<p align="center">
  A strongly-typed utility library for TypeScript
</p>

<br />

## Quick Start

### Node

Install the [package](https://www.npmjs.com/package/@appsweet-co/ts-utils) using npm.

```zsh
npm i @appsweet-co/ts-utils
```

Import utilities directly into your files as needed.

```ts
import { clamp, map, sub } from '@appsweet-co/ts-utils';
```

### Deno

:memo: ***NOTE: Support for Deno is a work in progress.***

Export the package from your [`deps.ts`](https://deno.land/manual@v1.11.3/examples/manage_dependencies) file directly from GitHub.

```ts
export * from "https://raw.githubusercontent.com/Appsweet-co/ts-utils/index.ts";
```
Import utilities in your files as needed.

```ts
import { clamp, map, sub } from "../deps.ts";
```

## API Docs

We use [TypeDoc](http://typedoc.org/) to generate API docs. Visit the [docs website](https://appsweet-co.github.io/ts-utils/) for details. 

## Design Goals

### Immutable Data

Mutated data is hard to work with. We use [immutable data](https://en.wikipedia.org/wiki/Immutable_object) when possible.

### Pure Functions

[Pure functions](https://en.wikipedia.org/wiki/Pure_function) are easy to test and work well with immutable data. They're also easy for [JavaScript engines to optimize](https://v8.dev/blog/turbofan-jit)!

### Single Input

We write functions that take exactly [one argument](https://en.wikipedia.org/wiki/Unary_function). We [curry](https://en.wikipedia.org/wiki/Currying) all functions as needed.

### Data Last

Data is always the [last argument](https://dev.to/richytong/practical-functional-programming-in-javascript-data-last-1gjo). This makes them easy to [pipe](https://en.wikipedia.org/wiki/Function_composition).

## Code Examples

Please see the [API docs](#api-docs) for example code.

## More Info

- [LICENSE](./LICENSE)
- [ROADMAP.md](./ROADMAP.md)
- [THANKS.md](./THANKS.md)

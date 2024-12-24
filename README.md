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
import { clamp, isNil, type ISOTimestamp } from '@appsweet-co/ts-utils';

// OR

import { clamp } from '@appsweet-co/ts-utils/fns/math';
import { isNil } from '@appsweet-co/ts-utils/fns/predicate';
import type { isNil } from '@appsweet-co/ts-utils/types/iso';
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

Mutated data is hard to work with. Use [immutable data](https://en.wikipedia.org/wiki/Immutable_object) instead.

### Pure Functions

[Pure Functions](https://en.wikipedia.org/wiki/Pure_function) are easy to test and work well with immutable data. They're also [referentially transparent](https://www.yld.io/blog/the-not-so-scary-guide-to-functional-programming/) and easy for JavaScript engines to [optimize](https://v8.dev/blog/turbofan-jit).

### Single Input

We write functions that take exactly [one argument](https://en.wikipedia.org/wiki/Unary_function). We [curry](https://en.wikipedia.org/wiki/Currying) all functions as needed.

### Graceful Fallbacks

Return fallbacks instead of undefined or throwing errors.

### Fallback First, Data Last

Passing data as the [last argument](https://dev.to/richytong/practical-functional-programming-in-javascript-data-last-1gjo) of a function is great for piping and currying, but TypeScript's typing system works best when we pass in data as the [first argument](https://basarat.gitbook.io/typescript/type-system/type-inference).

We pass [fallback values](#graceful-fallbacks) as the first argument and actual data as the last. This helps TypeScript understand the code while still allowing for piping and currying.

## Code Examples

Please see the [API docs](#api-docs) for example code.

## More Info

- [LICENSE](./LICENSE)
- [ROADMAP.md](./ROADMAP.md)
- [THANKS.md](./THANKS.md)

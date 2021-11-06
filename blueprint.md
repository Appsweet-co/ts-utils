{{ template:logo }}
{{ template:title }}
{{ template:description }}
{{ template:badges }}

## Usage

### Node

Use npm to install the [package](https://www.npmjs.com/package/@appsweet-co/ts-utils) into your project.

```zsh
npm install @appsweet-co/ts-utils
```

Import utilities into your files as needed.

```ts
import { clamp, map, sub } from '@appsweet-co/ts-utils';
```

### Deno

:memo: ***NOTE: Support for Deno is a work in progress.***

Add utilities to your [`deps.ts`](https://deno.land/manual@v1.11.3/examples/manage_dependencies) file directly from GitHub.

```ts
export { clamp } from "https://raw.githubusercontent.com/Appsweet-co/ts-utils/main/lib/fns/clamp.ts"
export { map } from "https://raw.githubusercontent.com/Appsweet-co/ts-utils/main/lib/fns/map.ts"
export { sub } from "https://raw.githubusercontent.com/Appsweet-co/ts-utils/main/lib/fns/sub.ts"
```

Import utilities into your files as needed.

```ts
import { clamp, map, sub } from "./deps.ts";
```

## API Docs

Visit the [docs website](https://appsweet-co.github.io/ts-utils/) for details. We use [TypeDoc](http://typedoc.org/) to generate API docs.

## Design Goals

### Immutable Data

Mutated data is hard to grok. We use [immutable data](https://en.wikipedia.org/wiki/Immutable_object) when possible.

### Pure Functions

[Pure functions](https://en.wikipedia.org/wiki/Pure_function) are easy to test and work well with immutable data. They're also easy to [pipe](https://en.wikipedia.org/wiki/Function_composition) and [curry](https://en.wikipedia.org/wiki/Currying).

### Data First

We write data-first functions when possible.

Passing data as the [last argument](https://dev.to/richytong/practical-functional-programming-in-javascript-data-last-1gjo) of a function is great for piping and currying, but TypeScript's typing system works best when we pass in data as the [first argument](https://basarat.gitbook.io/typescript/type-system/type-inference).

### Single Input

We write functions that take exactly one argument. We use arrays and objects to collect data into a single input when needed.

We add a trailing `_` to all [curried functions](https://en.wikipedia.org/wiki/Currying). This makes it easy to tell the difference between curried and non-curried functions with the same name. Example:

## Show your support

Give a ⭐️ if this project helped you!

Contributions, issues and feature requests are welcome!

Please check the [issues page](https://github.com/appsweet-co/ts-utils/issues) and [Roadmap](./ROADMAP.md).

{{ template:license }}

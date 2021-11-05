<!-- ⚠️ This README has been generated from the file(s) "blueprint.md" ⚠️--><p align="center">
  <img src="./logo.png" alt="Logo" width="250" height="auto" />
</p>
<h1 align="center">@appsweet-co/ts-utils</h1>
<p align="center">
  <b>A lightweight utility library for type script</b></br>
  <sub><sub>
</p>

<br />

<p align="center">
		<a href="https://www.npmjs.com/package/@appsweet-co/ts-utils"><img alt="NPM" src="https://img.shields.io/npm/v/@appsweet-co/ts-utils.svg?style=for-the-badge" height="20"/></a>
<a href="https://appsweet-co.github.io/ts-utils/"><img alt="Documentation" src="https://img.shields.io/badge/documentation-yes-brightgreen.svg?style=for-the-badge" height="20"/></a>
<a href="https://github.com/appsweet-co/ts-utils/blob/main/LICENSE"><img alt="License: MIT" src="https://img.shields.io/badge/License-MIT-yellow.svg?style=for-the-badge" height="20"/></a>
<a href="https://www.typescriptlang.org/"><img alt="TypeScript" src="https://img.shields.io/badge/TypeScript-4.4.3-blueviolet?style=for-the-badge" height="20"/></a>
<a href="http://typedoc.org/"><img alt="TypeDoc" src="https://img.shields.io/badge/TypeDoc-0.22.4-blueviolet?style=for-the-badge" height="20"/></a>
	</p>



[](#install)

## Install

```zsh
npm install @appsweet-co/ts-utils
```


[](#usage)

## Usage

Import utilities directly into your files:

```ts
import { clamp, map, sub } from '@appsweet-co/ts-utils';
```


[](#api-docs)

## API Docs

Visit the [docs website](https://appsweet-co.github.io/ts-utils/) for details. We use [TypeDoc](http://typedoc.org/) to generate API docs.


[](#design-goals)

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

```ts
// Curried 
const add_ = (a: number) => (b: number) => a + b;

// Non-curried
const add = ([a, b]: [number, number]) => a + b;
```


[](#-contributing)

## 🤝 Contributing


[](#show-your-support)

## Show your support

Give a ⭐️ if this project helped you!

Contributions, issues and feature requests are welcome!

Please check the [issues page](https://github.com/appsweet-co/ts-utils/issues) and [Roadmap](./ROADMAP.md).


[](#license)

## License
	
Licensed under [MIT](https://opensource.org/licenses/MIT).

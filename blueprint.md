{{ template:logo }}
{{ template:title }}
{{ template:description }}
{{ template:badges }}

## Install

```zsh
npm install @appsweet-co/ts-utils
```

## Usage

Import utilities directly into your files:

```ts
import { clamp, map, sub } from '@appsweet-co/ts-utils';
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

## 🤝 Contributing

## Show your support

Give a ⭐️ if this project helped you!

Contributions, issues and feature requests are welcome!

Please check the [issues page](https://github.com/appsweet-co/ts-utils/issues) and [Roadmap](./ROADMAP.md).

{{ template:license }}

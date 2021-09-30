<!-- ⚠️ This README has been generated from the file(s) "blueprint.md" ⚠️--><p align="center">
  <img src="./logo.png" alt="Logo" width="250" height="auto" />
</p>
<h1 align="center">@appsweet-co/ts-utils</h1>
<p align="center">
  <b>Utility functions for TypeScript</b></br>
  <sub><sub>
</p>

<br />

<p align="center">
		<a href="https://www.npmjs.com/package/@appsweet-co/ts-utils"><img alt="NPM" src="https://img.shields.io/npm/v/@appsweet-co/ts-utils.svg?style=for-the-badge" height="20"/></a>
<a href="https://appsweet-co.github.io/ts-utils/"><img alt="Documentation" src="https://img.shields.io/badge/documentation-yes-brightgreen.svg?style=for-the-badge" height="20"/></a>
<a href="https://github.com/appsweet-co/ts-utils/blob/main/LICENSE"><img alt="License: MIT" src="https://img.shields.io/badge/License-MIT-yellow.svg?style=for-the-badge" height="20"/></a>
<a href="https://www.typescriptlang.org/"><img alt="TypeScript" src="https://img.shields.io/badge/TypeScript-4.0.2-blueviolet?style=for-the-badge" height="20"/></a>
<a href="http://typedoc.org/"><img alt="TypeDoc" src="https://img.shields.io/badge/TypeDoc-0.19.1-blueviolet?style=for-the-badge" height="20"/></a>
	</p>


[![-----------------------------------------------------](https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/aqua.png)](#table-of-contents)

## ➤ Table of Contents

* [➤ Install](#-install)
* [➤ Usage](#-usage)
* [➤ API Docs](#-api-docs)
* [➤ Design Goals](#-design-goals)
	* [Immutable Data](#immutable-data)
	* [Pure Functions](#pure-functions)
	* [Data First](#data-first)
* [➤ Author](#-author)
* [➤ 🤝 Contributing](#--contributing)
* [➤ Show your support](#-show-your-support)
* [➤ License](#-license)


[![-----------------------------------------------------](https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/aqua.png)](#install)

## ➤ Install

```sh
npm install @appsweet-co/ts-utils
```


[![-----------------------------------------------------](https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/aqua.png)](#usage)

## ➤ Usage

Import utilities directly into your files:

```javascript
import { clamp, map, subtract } from '@appsweet-co/ts-utils';
```


[![-----------------------------------------------------](https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/aqua.png)](#api-docs)

## ➤ API Docs

Visit the [docs website](https://appsweet-co.github.io/ts-utils/) for details. We use [TypeDoc](http://typedoc.org/) to generate API documentation.


[![-----------------------------------------------------](https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/aqua.png)](#design-goals)

## ➤ Design Goals

### Immutable Data

Mutated data is hard to grok. We use [immutable data](https://en.wikipedia.org/wiki/Immutable_object) when possible.

### Pure Functions

[Pure functions](https://en.wikipedia.org/wiki/Pure_function) are easy to test and work well with immutable data. They're also easy to [pipe](https://en.wikipedia.org/wiki/Function_composition) and [curry](https://en.wikipedia.org/wiki/Currying).

### Data First

Passing data as the [last argument](https://dev.to/richytong/practical-functional-programming-in-javascript-data-last-1gjo) of a function is great for piping and currying, but TypeScript's typing system works best when we pass in data as the [first argument](https://basarat.gitbook.io/typescript/type-system/type-inference).

We write Data-First functions when possible.


[![-----------------------------------------------------](https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/aqua.png)](#author)

## ➤ Author

👤 **Appsweet.co**

* Website: http://a6t.co
* Github: [@appsweet-co](https://github.com/appsweet-co)


[![-----------------------------------------------------](https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/aqua.png)](#-contributing)

## ➤ 🤝 Contributing

Contributions, issues and feature requests are welcome!

Please check the [issues page](https://github.com/appsweet-co/ts-utils/issues) and [Roadmap](./ROADMAP.md).


[![-----------------------------------------------------](https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/aqua.png)](#show-your-support)

## ➤ Show your support

Give a ⭐️ if this project helped you!


[![-----------------------------------------------------](https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/aqua.png)](#license)

## ➤ License
	
Licensed under [MIT](https://opensource.org/licenses/MIT).

---

README generated with [@appnest/readme](https://github.com/andreasbm/readme)

<div align="center">

<img height="100" src="https://cds-design.github.io/favicon.svg" />

# `cds-design`

A component library for [CDS (Continuum Design System)](https://cds-design.github.io/) by Verve.

![npm](https://img.shields.io/npm/v/cds-design) ![MIT license](https://badgen.net/github/license/cds-design/continuum) ![npm](https://img.shields.io/npm/dt/cds-design) ![GitHub top language](https://img.shields.io/github/languages/top/cds-design/continuum) ![GitHub commit activity (branch)](https://img.shields.io/github/commit-activity/m/cds-design/continuum) ![Types Included](https://badgen.net/npm/types/cds-design)

---

</div>

## 🚀 Features

- **🪶 Lightweight**: The library is very lightweight, that it costs around 5KB plus 2KB per component in your bundle.
- **⚙️ Framework Agnostic**: The library is framework agnostic and can be used with any framework or even vanilla HTML.
- **🔧 Customizable**: The library is highly customizable and you can customize the components to your needs.
- **♿️ Accessible**: The library is accessible and follows the [WAI-ARIA](https://www.w3.org/WAI/standards-guidelines/aria/) guidelines.
- **🔥 Performant**: The library is performant by utilizing [Web Components](https://developer.mozilla.org/en-US/docs/Web/Web_Components) and employing Lazy loading, Tree-Shaking, and many more technologies under the hood.
- **💻 Cross-Browser**: The library is build on browser native technologies and works on all modern browsers.
- **👨‍💻 DX**: The library is build with developer experience in mind and provides a great developer experience. All components are typed and provide great intellisense support.

## ⬇️ Installation

```bash
npm install cds-design
```
or
```bash
yarn add cds-design
```
or
```bash
pnpm add cds-design
```

## 📦 Usage

After installing you can directly use the components in your project.

### Vanilla HTML
```html
<script type="module">
    import { load } from "https://esm.run/cds-design" // or import load from "https://esm.run/cds-design"
    load("button", "input", "checkbox")
</script>

<cds-button>Click Me</cds-button>
```

### React (JSX)
```jsx
import { load } from "cds-design" // or import load from "cds-design"
load("button", "input", "checkbox")

export default () => {
  return (
    <cds-button>Click Me</cds-button>
  )
}
```

### Vue (Composition API)
```vue
<script setup lang="ts">
    import { load } from "cds-design" // or import load from "cds-design"
    load("button", "input", "checkbox")
</script>

<template>
    <cds-button>Click Me</cds-button>
</template>
```

### Svelte
```svelte
<script context="module">
    import { load } from "cds-design" // or import load from "cds-design"
    load("button", "input", "checkbox")
</script>

<cds-button>Click Me</cds-button>
```

## 📚 Documentation

You can find the detailed documentation [here](https://cds-design.github.io/docs).

## 📝 License

This project is licensed under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions, issues and feature requests are welcome!

Feel free to check [issues page](https://github.com/cds-design/continuum/issues)

## 💪 Show your support

Give a ⭐️ if this project helped you!

## 🤝 Contributors

<a href="https://github.com/cds-design/continuum/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=cds-design/continuum" />
</a>

<div align="center">

---

[`Made with ❤️ by Verve`](https://github.com/ve-r-ve)

</div>

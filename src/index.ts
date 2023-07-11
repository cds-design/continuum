type ComponentName = string;

import { TAG_NAME_PREFIX, VERSION } from "./constants";

declare global {
  module globalThis {
    namespace cds {
      // @ts-ignore
      let version: string;
      // @ts-ignore
      let loaded: Set<ComponentName>;
    }
  }
}

globalThis.cds = globalThis.cds ?? {};

cds.version = cds.version ?? VERSION;

globalThis.cds.loaded = globalThis.cds.loaded ?? new Set<ComponentName>();

async function importComponent(name: ComponentName) {
  return (await import(`./components/${name}/index.ts`))
    .default as CustomElementConstructor;
}

/**
 * Load web components as custom elements.
 * Only loads components that have not been loaded before.
 */
function load(...components: ComponentName[]) {
  components.forEach(async (name) => {
    if (globalThis.cds.loaded.has(name)) {
      return console.warn(`Component ${name} already loaded`);
    }
    const Component = await importComponent(name);
    customElements.define(`${TAG_NAME_PREFIX}-${name}`, Component);
    // customElements.whenDefined(`${TAG_NAME_PREFIX}-${name}`).then(() => {
    globalThis.cds.loaded.add(name);
    // });
  });
}

export { load as default, load };

// TYPE DEFINITIONS FOR JSX/TSX

import type { LitElement } from "lit";
import type { DetailedHTMLProps, HTMLAttributes } from "react";

/**
 * 
 * Exclude `LitElement` Props
 * from the CDS Custom Elements
 * 
 */
type ExcludeLitProps<T> = Pick<T, Exclude<keyof T, keyof LitElement>>

/**
 * 
 * Custom Elements to `JSX.IntrinsicElements`
 * 
 * this converts the custom elements to intrinsic elements
 * so that they can be used in JSX as regular HTML elements
 * with intellisense and type checking.
 * 
 * @license MIT License
 */
export type CDS2JSX<T> = DetailedHTMLProps<ExcludeLitProps<T> | HTMLAttributes<T>, T>;
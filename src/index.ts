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

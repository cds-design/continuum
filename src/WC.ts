import { LitElement, PropertyValueMap } from "lit";
import { property } from "lit/decorators/property.js";

export class WC extends LitElement {
  @property({ type: String, reflect: true })
  className = "";

  connectedCallback(): void {
    super.connectedCallback();
    const className = new Set(this.className?.split(" ") as string[]);
    className.delete("");
    this.classList?.add(...className);
    // this.classList?.add(...(this.classList?.join(" ") + this.className).split(" "))
  }

  protected updated(
    _changedProperties: PropertyValueMap<any> | Map<PropertyKey, unknown>
  ): void {
    if (_changedProperties.has("className")) {
      const className = new Set(_changedProperties
        .get("className")
        ?.split(" ") as string[]);
      className.delete("");
      this.classList?.add(...className);
    }
  }
}

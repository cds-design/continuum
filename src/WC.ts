import { LitElement, PropertyValueMap } from "lit";
import { property } from "lit/decorators/property.js";


export class WC extends LitElement {

    @property({ type: String, reflect: true })
    className = "";

    connectedCallback(): void {
        super.connectedCallback();
        const className = this.className.split(" ") as string[];
        this.classList.add(...className);
    }

    protected updated(_changedProperties: PropertyValueMap<any> | Map<PropertyKey, unknown>): void {
        if (_changedProperties.has("className")) {
            const className = _changedProperties.get("className").split(" ") as string[];
            this.classList.add(...className);
        }
    }

}

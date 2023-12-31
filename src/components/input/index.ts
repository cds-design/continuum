import { property } from "lit/decorators.js";
import { classMap } from "lit/directives/class-map.js";
import { html } from "lit/static-html.js";
import { WC } from "#WC";
import globalsCss from "#globals.css";
import styleCss from "./style.css";
import { booleanConverter } from "#helpers";

/**
 * A component that displays an input field, usually for forms
 */
export default class Input extends WC {
  static styles = [globalsCss, styleCss];

  /**
   * The label of the input field
   * If no label is provided, the placeholder will be used as label
   */
  @property() label!: string;

  /**
   * The type of the input field
   */
  @property() type: string = "text";

  /**
   * The placeholder of the input field
   */
  @property() placeholder: string = this.label;

  /**
   * The value of the input field
   */
  @property({ reflect: true }) value: string = "";

  /**
   * Disables the input field
   */
  @property({
    type: Boolean,
    converter: booleanConverter,
  })
  disabled: boolean = false;

  private _inputHandler(event: Event) {
    if (this.type !== "password") {
      this.value = (event.target as HTMLInputElement).value;
    }
  }

  render() {
    return html`
      <div
        class=${classMap({
          disabled: this.disabled,
        })}
      >
        <label for="input" class="texture">
          ${this.label ?? this.placeholder}
        </label>
        <input
          @input=${this._inputHandler}
          type=${this.type}
          id="input"
          placeholder=${this.placeholder}
          ?disabled=${this.disabled}
        />
      </div>
    `;
  }
}

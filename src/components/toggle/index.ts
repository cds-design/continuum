import { property } from "lit/decorators.js";
import { classMap } from "lit/directives/class-map.js";
import { html } from "lit/static-html.js";
import { WC } from "#WC";
import globalsCss from "#globals.css";
import styleCss from "./style.css";
import { booleanConverter } from "#helpers";

/**
 * A component that displays a toggle switch.
 */
export default class Toggle extends WC {
  static styles = [globalsCss, styleCss];

  /**
   * Value of the toggle
   */
  @property({
    type: Boolean,
    reflect: true,
    converter: booleanConverter
  })
  toggled = false;

  /**
   * Disables the toggle
   */
  @property({
    type: Boolean,
    converter: booleanConverter
  })
  disabled = false;

  /**
   * Toggles the toggle switch
   */
  toggle() {
    this.toggled = !this.toggled;
  }

  render() {
    return html`
      <label
        for="toggle"
        class=${classMap({
          disabled: this.disabled,
        })}
      >
        <input
          type="checkbox"
          name="toggle"
          class="texture"
          id="toggle"
          @input=${this.toggle}
          .disabled=${this.disabled}
          .checked=${this.toggled}
        />
        <span>
          <slot></slot>
        </span>
      </label>
    `;
  }
}

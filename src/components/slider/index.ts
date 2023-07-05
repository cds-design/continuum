import { property } from "lit/decorators.js";
import { classMap } from "lit/directives/class-map.js";
import { styleMap } from "lit/directives/style-map.js";
import { html } from "lit/static-html.js";
import { WC } from "#WC";
import globalsCss from "#globals.css";
import styleCss from "../slider/style.css";
import { booleanConverter } from "#helpers";

/**
 * A component that displays a slider
 */
export default class Slider extends WC {
  static styles = [globalsCss, styleCss];

  /**
   * The value of the slider
   * The value is a number between 0 and 100
   */
  @property({ type: Number, reflect: true })
  value = 0;

  /**
   * Disables the slider
   */
  @property({
    type: Boolean,
    converter: booleanConverter,
  })
  disabled = false;

  /**
   * The step of the slider
   */
  @property({ type: Number,reflect:true })
  step = 1;

  /**
   * The minimum value of the slider
   */
  @property({ type: Number,reflect:true })
  min = 0;

  /**
   * The maximum value of the slider
   */
  @property({ type: Number,reflect:true})
  max = 100;

  private _handleInput(event: Event) {
    this.value = parseInt((event.target as HTMLInputElement).value);
  }

  render() {
    return html`
      <input
        @input=${this._handleInput}
        type="range"
        .value=${this.value}
        class=${classMap({
          disabled: this.disabled,
        })}
        .min=${this.min}
        .max=${this.max}
        .step=${this.step}
        ?disabled=${this.disabled}
        style=${styleMap({
          "--value": `${((this.value-this.min) / (this.max-this.min))* 100}%`,

        })}
      />
    `;
  }
}

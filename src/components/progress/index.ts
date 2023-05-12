import { property } from "lit/decorators.js";
import { html } from "lit/static-html.js";
import { WC } from "../../WC";
import globalsCss from "../../styles/globals.css";
import styleCss from "./style.css";

/**
 * A component that displays a progress bar, usually for loading
 */
export default class Progress extends WC {
  static styles = [globalsCss, styleCss];

  /**
   * The value of the progress bar
   */
  @property({ type: Number }) value!: number;

  /**
   * The maximum value of the progress bar
   */
  @property({ type: Number }) max: number = 100;

  render() {
    return html` <progress value=${this.value} max=${this.max}></progress> `;
  }
}

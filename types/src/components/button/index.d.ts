import { CSSResult, TemplateResult } from "lit";
import { WC } from "#WC";
/**
 * A component that displays a button
 */
export default class Button extends WC {
  /**
   * Disables the button
   */
  disabled: boolean;
  static styles: CSSResult[];
  render(): TemplateResult;
}

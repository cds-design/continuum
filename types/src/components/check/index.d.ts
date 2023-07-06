import { CSSResult, TemplateResult } from "lit";
import { WC } from "#WC";
/**
 * A component that displays a checkbox, usually for forms
 */
export default class Check extends WC {
  static styles: CSSResult[];
  /**
   * Checked state of the checkbox
   */
  checked: boolean;
  /**
   * Disables the checkbox
   */
  disabled: boolean;
  /**
   * Checks the checkbox
   */
  check(): void;
  /**
   * Unchecks the checkbox
   */
  uncheck(): void;
  /**
   * Toggles the checkbox
   */
  toggle(): void;
  render(): TemplateResult;
}

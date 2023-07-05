import { CSSResult, TemplateResult } from 'lit';
import { WC } from "#WC";
/**
 * A component that displays a toggle switch.
 */
export default class Toggle extends WC {
    static styles: CSSResult[];
    /**
     * Value of the toggle
     */
    toggled: boolean;
    /**
     * Disables the toggle
     */
    disabled: boolean;
    /**
     * Toggles the toggle switch
     */
    toggle(): void;
    render(): TemplateResult;
}
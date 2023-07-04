import type { CSSResult, TemplateResult } from 'lit';
import { WC } from "#WC";
/**
 * A component that displays a slider
 */
export default class Slider extends WC {
    static styles: CSSResult[];
    /**
     * The value of the slider
     * The value is a number between 0 and 100
     */
    value: number;
    /**
     * Disables the slider
     */
    disabled: boolean;
    /**
     * The step of the slider
     */
    step: number;
    /**
     * The minimum value of the slider
     */
    min: number;
    /**
     * The maximum value of the slider
     */
    max: number;
    private _handleInput;
    render(): TemplateResult;
}

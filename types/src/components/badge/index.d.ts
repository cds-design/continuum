import { CSSResult, TemplateResult } from 'lit';
import { WC } from "#WC";
/**
 * A component that displays a badge, usually for tags, chips, etc.
 */
export default class Badge extends WC {
    static styles: CSSResult[];
    /**
     * Makes the badge closable
     */
    closeable: boolean;
    /**
     * Disables the badge
     */
    disabled: boolean;
    private _closed;
    /**
     * Closes the badge
     */
    close(): void;
    render(): TemplateResult | null;
}

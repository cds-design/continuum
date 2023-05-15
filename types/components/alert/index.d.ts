import type { CSSResult, TemplateResult } from 'lit';
import { WC } from "#WC";
/**
 * A component for displaying alerts
 */
export default class Alert extends WC {
    static styles: CSSResult[];
    /**
     * The type of alert component
     * changes the color and icon of the alert
     */
    type: "info" | "cross" | "warn";
    /**
     * Makes the alert closable
     */
    closable: boolean;
    private _closed;
    /**
     * Closes the alert
     */
    close(): void;
    render(): TemplateResult | null;
}

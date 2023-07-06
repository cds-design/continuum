import type { LitElement } from "lit";
import type { DetailedHTMLProps, HTMLAttributes } from "react";

import type HTMLCdsAlert from "./components/alert";
import type HTMLCdsAvatar from "./components/avatar";
import type HTMLCdsBadge from "./components/badge";
import type HTMLCdsButton from "./components/button";
import type HTMLCdsCheck from "./components/check";
import type HTMLCdsInput from "./components/input";
import type HTMLCdsProgress from "./components/progress";
import type HTMLCdsSlider from "./components/slider";
import type HTMLCdsToggle from "./components/toggle";

export * from "./src/index";

type CDS2JSX<T> = DetailedHTMLProps<ExtractProps<T> | HTMLAttributes<T>, T>;

type ExtractProps<T> = Pick<T, Exclude<keyof T, keyof LitElement>>;

declare global {
  interface HTMLElementTagNameMap {
    "cds-alert": HTMLCdsAlert;
    "cds-avatar": HTMLCdsAvatar;
    "cds-badge": HTMLCdsBadge;
    "cds-button": HTMLCdsButton;
    "cds-check": HTMLCdsCheck;
    "cds-input": HTMLCdsInput;
    "cds-progress": HTMLCdsProgress;
    "cds-slider": HTMLCdsSlider;
    "cds-toggle": HTMLCdsToggle;
  }
  namespace JSX {
    interface IntrinsicElements {
      "cds-alert": CDS2JSX<HTMLCdsAlert>;
      "cds-avatar": CDS2JSX<HTMLCdsAvatar>;
      "cds-badge": CDS2JSX<HTMLCdsBadge>;
      "cds-button": CDS2JSX<HTMLCdsButton>;
      "cds-check": CDS2JSX<HTMLCdsCheck>;
      "cds-input": CDS2JSX<HTMLCdsInput>;
      "cds-progress": CDS2JSX<HTMLCdsProgress>;
      "cds-slider": CDS2JSX<HTMLCdsSlider>;
      "cds-toggle": CDS2JSX<HTMLCdsToggle>;
    }
  }
}

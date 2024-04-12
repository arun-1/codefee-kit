export declare type TimePanelCssVar = {
    '--cf-clock-control-bg-color': string;
    '--cf-clock-control-bg-color-on': string;
    '--cf-clock-bg-color': string;
    '--cf-clock-frame-color': string;
    '--cf-clock-hour-tick-color': string;
    '--cf-clock-hour-quarter-tick-color': string;
    '--cf-clock-center-dot-color': string;
    '--cf-clock-arm-long-color': string;
    '--cf-clock-arm-short-color': string;
    '--cf-clock-arm-seconds-color': string;
    '--cf-clock-selected-color': string;
    '--cf-clock-selected-color-on': string;
};
export declare const Clock: import("styled-components").StyledComponent<"svg", any, {}, never>;
export declare const ClockFrame: import("styled-components").StyledComponent<"circle", any, {}, never>;
export declare const CenterDot: import("styled-components").StyledComponent<"circle", any, {}, never>;
export declare const HourMark: import("styled-components").StyledComponent<"line", any, {
    hour: number;
}, never>;
export declare const Text: import("styled-components").StyledComponent<"text", any, {
    isActive?: boolean | undefined;
}, never>;
export declare const ActiveCircle: import("styled-components").StyledComponent<"circle", any, {}, never>;
export declare const CenterGroup: import("styled-components").StyledComponent<"g", any, {}, never>;
export declare const LongArm: import("styled-components").StyledComponent<"line", any, {}, never>;
export declare const ShortArm: import("styled-components").StyledComponent<"line", any, {}, never>;
export declare const SecondsArm: import("styled-components").StyledComponent<"line", any, {}, never>;
export declare const HourMinuteOverlay: import("styled-components").StyledComponent<"rect", any, {}, never>;

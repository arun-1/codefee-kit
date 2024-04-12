/// <reference types="react" />
export declare type TimePanelCssVar = {
    '--cf-time-panel-background-color': string;
};
export declare const TimePanel: import("styled-components").StyledComponent<"div", any, {}, never>;
export declare const InputBar: import("styled-components").StyledComponent<"div", any, {}, never>;
export declare const HourMinuteGroup: import("styled-components").StyledComponent<"div", any, {}, never>;
export declare const HourInput: import("styled-components").StyledComponent<import("react").ForwardRefExoticComponent<{
    id?: string | undefined;
    label?: import("react").ReactNode;
} & import("../..").FormControlProps & import("react").InputHTMLAttributes<HTMLInputElement> & import("react").RefAttributes<HTMLDivElement>>, any, {}, never>;
export declare const MinuteInput: import("styled-components").StyledComponent<import("react").ForwardRefExoticComponent<{
    id?: string | undefined;
    label?: import("react").ReactNode;
} & import("../..").FormControlProps & import("react").InputHTMLAttributes<HTMLInputElement> & import("react").RefAttributes<HTMLDivElement>>, any, {}, never>;
export declare const HourButton: import("styled-components").StyledComponent<"button", any, {
    isActive: boolean;
}, never>;
export declare const MinuteButton: import("styled-components").StyledComponent<"button", any, {
    isActive: boolean;
}, never>;
export declare const HourMinuteColon: import("styled-components").StyledComponent<import("react").FC<import("components/Typography").TypographyProps>, any, {}, never>;
export declare const ClockContainer: import("styled-components").StyledComponent<"div", any, {}, never>;
export declare const Clock: import("styled-components").StyledComponent<import("react").ForwardRefExoticComponent<{
    clockMode?: import("components/Clock").ClockMode | undefined;
    hourMarks?: string[] | undefined;
    minuteMarks?: string[] | undefined;
    time?: import("../..").Time | undefined;
    viewStyle?: import("components/Clock").ViewStyle | undefined;
    onTimeChange?: ((time: import("../..").Time) => void) | undefined;
    onHourChange?: ((time: import("../..").Time) => void) | undefined;
    onMinuteChange?: ((time: import("../..").Time) => void) | undefined;
} & import("react").SVGAttributes<SVGSVGElement> & import("react").RefAttributes<SVGSVGElement>>, any, {}, never>;

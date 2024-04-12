/// <reference types="react" />
export declare const DateTimeSelector: import("styled-components").StyledComponent<"div", any, {}, never>;
export declare const OptionBar: import("styled-components").StyledComponent<"div", any, {}, never>;
export declare const OptionButton: import("styled-components").StyledComponent<"button", any, {
    isActive: boolean;
}, never>;
export declare const DateSelector: import("styled-components").StyledComponent<import("react").ForwardRefExoticComponent<{
    date?: Date | undefined;
    onDateChange?: ((date: Date) => void) | undefined;
    onMonthChange?: ((date: Date) => void) | undefined;
    onYearChange?: ((date: Date) => void) | undefined;
} & import("components/CalendarPanel").CalendarPanelOptions & import("react").HtmlHTMLAttributes<HTMLDivElement> & import("react").RefAttributes<HTMLDivElement>>, any, {}, never>;
export declare const TimeSelector: import("styled-components").StyledComponent<import("react").ForwardRefExoticComponent<{
    inputVariant?: import("../TimePanel/Common").TimeInputVariant | undefined;
} & import("../TimePanel/Common").TimeInputProps & import("react").HtmlHTMLAttributes<HTMLDivElement> & import("react").RefAttributes<HTMLDivElement>>, any, {}, never>;
export declare const ClockIcon: import("styled-components").StyledComponent<import("react").ForwardRefExoticComponent<import("components/Icons").IconProps & import("react").RefAttributes<SVGSVGElement>>, any, {}, never>;

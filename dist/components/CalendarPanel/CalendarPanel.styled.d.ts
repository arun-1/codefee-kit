/// <reference types="react" />
export declare type CalendarPanelCssVar = {
    '--cf-calendar-panel-background-color': string;
};
export declare const CalendarPanel: import("styled-components").StyledComponent<"div", any, {}, never>;
export declare const NavigationPanel: import("styled-components").StyledComponent<"div", any, {}, never>;
export declare const TitleButton: import("styled-components").StyledComponent<"button", any, {}, never>;
export declare const NavButton: import("styled-components").StyledComponent<import("react").FC<import("components/IconButton").IconButtonProps>, any, {}, never>;
export declare const DaySelector: import("styled-components").StyledComponent<"div", any, {}, never>;
export declare const MonthYearSelector: import("styled-components").StyledComponent<"div", any, {}, never>;
export declare const DayIndicator: import("styled-components").StyledComponent<"div", any, {}, never>;
export declare const DayIndicatorTile: import("styled-components").StyledComponent<"span", any, {}, never>;
export declare const DayTile: import("styled-components").StyledComponent<import("react").FC<{
    dayPeriod: import("../..").DayPeriod;
} & {
    isActive: boolean;
} & import("components/IconButton").IconButtonProps>, any, {}, never>;
export declare const YearMonthTile: import("styled-components").StyledComponent<import("react").FC<{
    isActive: boolean;
} & import("components/IconButton").IconButtonProps>, any, {}, never>;

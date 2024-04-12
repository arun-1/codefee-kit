import React, { HtmlHTMLAttributes } from 'react';
export declare type CalendarPanelOptions = {
    dayIndicatorLabels?: string[];
    monthLabels?: string[];
};
export declare type CalendarPanelProps = {
    date?: Date;
    onDateChange?: (date: Date) => void;
    onMonthChange?: (date: Date) => void;
    onYearChange?: (date: Date) => void;
} & CalendarPanelOptions & HtmlHTMLAttributes<HTMLDivElement>;
declare const CalendarPanel: React.ForwardRefExoticComponent<{
    date?: Date | undefined;
    onDateChange?: ((date: Date) => void) | undefined;
    onMonthChange?: ((date: Date) => void) | undefined;
    onYearChange?: ((date: Date) => void) | undefined;
} & CalendarPanelOptions & React.HtmlHTMLAttributes<HTMLDivElement> & React.RefAttributes<HTMLDivElement>>;
export default CalendarPanel;

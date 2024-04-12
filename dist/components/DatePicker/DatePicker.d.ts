import { CalendarPanelOptions } from '../../components/CalendarPanel';
import React, { HtmlHTMLAttributes } from 'react';
export declare type DatePickerProps = {
    date?: Date;
    placeholder?: string;
    calendarPanelOptions?: CalendarPanelOptions;
    onDateChange?: (date?: Date) => void;
} & HtmlHTMLAttributes<HTMLDivElement>;
declare const DatePicker: React.ForwardRefExoticComponent<{
    date?: Date | undefined;
    placeholder?: string | undefined;
    calendarPanelOptions?: CalendarPanelOptions | undefined;
    onDateChange?: ((date?: Date) => void) | undefined;
} & React.HtmlHTMLAttributes<HTMLDivElement> & React.RefAttributes<HTMLDivElement>>;
export default DatePicker;

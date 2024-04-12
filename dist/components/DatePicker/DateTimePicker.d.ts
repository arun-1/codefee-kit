import { CalendarPanelOptions } from '../../components/CalendarPanel';
import React, { HtmlHTMLAttributes } from 'react';
export declare type DateTimePickerProps = {
    dateTime?: Date;
    placeholder?: string;
    calendarPanelOptions?: CalendarPanelOptions;
    onDateTimeChange?: (dateTime?: Date) => void;
} & HtmlHTMLAttributes<HTMLDivElement>;
declare const DateTimePicker: React.ForwardRefExoticComponent<{
    dateTime?: Date | undefined;
    placeholder?: string | undefined;
    calendarPanelOptions?: CalendarPanelOptions | undefined;
    onDateTimeChange?: ((dateTime?: Date) => void) | undefined;
} & React.HtmlHTMLAttributes<HTMLDivElement> & React.RefAttributes<HTMLDivElement>>;
export default DateTimePicker;

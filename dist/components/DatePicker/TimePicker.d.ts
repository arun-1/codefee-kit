import { Time } from '../../utils/TimeHelper';
import React, { HtmlHTMLAttributes } from 'react';
export declare type TimePickerProps = {
    time?: Time;
    placeholder?: string;
    onTimeChange?: (time?: Time) => void;
} & HtmlHTMLAttributes<HTMLDivElement>;
declare const TimePicker: React.ForwardRefExoticComponent<{
    time?: Time | undefined;
    placeholder?: string | undefined;
    onTimeChange?: ((time?: Time) => void) | undefined;
} & React.HtmlHTMLAttributes<HTMLDivElement> & React.RefAttributes<HTMLDivElement>>;
export default TimePicker;

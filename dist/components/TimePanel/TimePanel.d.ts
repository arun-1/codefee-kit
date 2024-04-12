import React, { FC, HtmlHTMLAttributes } from 'react';
import { TimeInputProps, TimeInputVariant } from './Common';
export declare const switchInputVariant: (type: TimeInputVariant) => FC<TimeInputProps>;
export declare type TimePanelProps = {
    inputVariant?: TimeInputVariant;
} & TimeInputProps & HtmlHTMLAttributes<HTMLDivElement>;
declare const TimePanel: React.ForwardRefExoticComponent<{
    inputVariant?: TimeInputVariant | undefined;
} & TimeInputProps & React.HtmlHTMLAttributes<HTMLDivElement> & React.RefAttributes<HTMLDivElement>>;
export default TimePanel;

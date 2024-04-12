import React, { SVGAttributes } from 'react';
import { Time } from '../../utils/TimeHelper';
import { ClockMode, ViewStyle } from './Common';
export declare type ClockProps = {
    clockMode?: ClockMode;
    hourMarks?: string[];
    minuteMarks?: string[];
    time?: Time;
    viewStyle?: ViewStyle;
    onTimeChange?: (time: Time) => void;
    onHourChange?: (time: Time) => void;
    onMinuteChange?: (time: Time) => void;
} & SVGAttributes<SVGSVGElement>;
declare const Clock: React.ForwardRefExoticComponent<{
    clockMode?: ClockMode | undefined;
    hourMarks?: string[] | undefined;
    minuteMarks?: string[] | undefined;
    time?: Time | undefined;
    viewStyle?: ViewStyle | undefined;
    onTimeChange?: ((time: Time) => void) | undefined;
    onHourChange?: ((time: Time) => void) | undefined;
    onMinuteChange?: ((time: Time) => void) | undefined;
} & React.SVGAttributes<SVGSVGElement> & React.RefAttributes<SVGSVGElement>>;
export default Clock;

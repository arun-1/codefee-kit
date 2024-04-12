import { ButtonGroupButton } from '../../components/ButtonGroup';
import { Time, TimePeriod } from '../../utils/TimeHelper';
export declare type TimeInputProps = {
    time?: Time;
    onTimeChange?: (time: Time) => void;
    onHourChange?: (time: Time) => void;
    onMinuteChange?: (time: Time) => void;
};
export declare type TimeInputVariant = 'input' | 'clock';
export declare type AmPmButton = ButtonGroupButton<TimePeriod>;
export declare const makeAmPmButtons: (timePeriod: TimePeriod) => ButtonGroupButton<TimePeriod>[];

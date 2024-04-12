import { FC } from 'react';
declare type EditMinuteModeProps = {
    centerDomRect: DOMRect | undefined;
    minutes: number;
    minuteMarks: string[];
    onMinuteChange?: (minute: number) => void;
};
declare const EditMinuteMode: FC<EditMinuteModeProps>;
export default EditMinuteMode;

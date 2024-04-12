import { FC } from 'react';
declare type EditHourModeProps = {
    centerDomRect: DOMRect | undefined;
    hours: number;
    hourMarks: string[];
    onHourChange?: (hour: number) => void;
};
declare const EditHourMode: FC<EditHourModeProps>;
export default EditHourMode;

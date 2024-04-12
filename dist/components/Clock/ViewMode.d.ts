import { FC } from 'react';
import { ViewStyle } from './Common';
declare type ViewModeProps = {
    hourDeg: number;
    minuteDeg: number;
    secondsDeg: number;
    isRealtime?: boolean;
    viewStyle?: ViewStyle;
};
declare const ViewMode: FC<ViewModeProps>;
export default ViewMode;

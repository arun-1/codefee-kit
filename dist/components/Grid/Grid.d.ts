import { HorizontalAlignment, VerticalAlignment } from '../../common/Types';
import React, { CSSProperties, ReactNode } from 'react';
export declare type GridSize = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | undefined;
export interface GridProps {
    children?: ReactNode;
    className?: string;
    fullHeight?: boolean;
    style?: CSSProperties;
    xAlign?: HorizontalAlignment;
    yAlign?: VerticalAlignment;
    xs?: GridSize;
    sm?: GridSize;
    md?: GridSize;
    lg?: GridSize;
    xl?: GridSize;
}
declare const Grid: React.ForwardRefExoticComponent<GridProps & React.RefAttributes<HTMLDivElement>>;
export default Grid;

import React, { ReactNode, HtmlHTMLAttributes } from 'react';
import { Gutter } from '../../common';
export interface FigureProps extends HtmlHTMLAttributes<HTMLElement> {
    caption?: ReactNode;
    gutter?: Gutter;
    children?: ReactNode;
}
declare const Figure: React.ForwardRefExoticComponent<FigureProps & React.RefAttributes<HTMLElement>>;
export default Figure;

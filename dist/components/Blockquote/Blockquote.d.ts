import { Gutter } from '../../common/Types';
import React, { BlockquoteHTMLAttributes, ReactNode } from 'react';
export interface BlockquoteProps extends BlockquoteHTMLAttributes<HTMLQuoteElement> {
    cite?: string;
    caption?: ReactNode;
    children?: ReactNode;
    gutter?: Gutter;
}
declare const Blockquote: React.ForwardRefExoticComponent<BlockquoteProps & React.RefAttributes<HTMLElement>>;
export default Blockquote;

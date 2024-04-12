import { FC, ReactNode, CSSProperties } from 'react';
import { TypographyElementProps } from './Common';
export declare type TypographyType = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'subtitle1' | 'subtitle2' | 'body1' | 'body2' | 'p' | 'caption' | 'button' | 'quote';
export interface TypographyProps extends TypographyElementProps {
    className?: string;
    children?: ReactNode;
    style?: CSSProperties;
    type?: TypographyType;
}
declare const Typography: FC<TypographyProps>;
export default Typography;

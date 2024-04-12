import { FC, ReactNode, CSSProperties } from 'react';
export interface LoadAreaProps {
    children?: ReactNode;
    className?: string;
    opacity?: number;
    loading: boolean;
    style?: CSSProperties;
    tag?: keyof JSX.IntrinsicElements;
    renderLoader?: () => ReactNode;
}
declare const LoadArea: FC<LoadAreaProps>;
export default LoadArea;

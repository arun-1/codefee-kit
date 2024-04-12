import { FormControlProps } from '../../common/Types';
import { InputHTMLAttributes, ReactNode } from 'react';
export declare type InputProps = {
    id?: string;
    label?: ReactNode;
} & FormControlProps & InputHTMLAttributes<HTMLInputElement>;

import { FormControlProps } from '../../common/Types';
import { TextareaHTMLAttributes, ReactNode } from 'react';
export declare type TextAreaProps = {
    id?: string;
    label?: ReactNode;
} & FormControlProps & TextareaHTMLAttributes<HTMLTextAreaElement>;

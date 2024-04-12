import React, { ReactNode, ButtonHTMLAttributes } from 'react';
export declare type ButtonType = 'primary' | 'subtle' | 'info' | 'success' | 'warning' | 'error' | 'lite';
export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    type?: 'submit' | 'reset' | 'button';
    children?: ReactNode;
    text?: string;
    variant?: ButtonType;
    onClick?: () => void;
}
declare const Button: React.ForwardRefExoticComponent<ButtonProps & React.RefAttributes<HTMLButtonElement>>;
export default Button;

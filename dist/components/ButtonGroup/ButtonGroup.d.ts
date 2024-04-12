import React, { HtmlHTMLAttributes, ButtonHTMLAttributes, ReactNode } from 'react';
export declare type ButtonGroupButton<T> = {
    content: T;
    selected: boolean;
} & ButtonHTMLAttributes<HTMLButtonElement>;
export declare type ButtonGroupProps<T = ReactNode> = {
    buttons: ButtonGroupButton<T>[];
    onButtonClick?: (button: ButtonGroupButton<T>) => void;
} & HtmlHTMLAttributes<HTMLDivElement>;
declare const ButtonGroup: React.ForwardRefExoticComponent<{
    buttons: ButtonGroupButton<React.ReactNode>[];
    onButtonClick?: ((button: ButtonGroupButton<React.ReactNode>) => void) | undefined;
} & React.HtmlHTMLAttributes<HTMLDivElement> & React.RefAttributes<HTMLDivElement>>;
export default ButtonGroup;

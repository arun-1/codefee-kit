import React, { InputHTMLAttributes } from 'react';
export declare type SliderProps = {
    onValueChange?: (value: number) => void;
} & InputHTMLAttributes<HTMLInputElement>;
declare const Slider: React.ForwardRefExoticComponent<{
    onValueChange?: ((value: number) => void) | undefined;
} & React.InputHTMLAttributes<HTMLInputElement> & React.RefAttributes<HTMLInputElement>>;
export default Slider;

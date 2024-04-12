import { Gutter } from '../../common';
import React, { HtmlHTMLAttributes } from 'react';
export interface CheckboxProps extends HtmlHTMLAttributes<HTMLLabelElement> {
    checked: boolean;
    disabled?: boolean;
    gutterBottom?: Gutter;
    inputProps?: HtmlHTMLAttributes<HTMLInputElement>;
    label?: string;
    onValueChange?: (checked: boolean) => void;
}
declare const Checkbox: React.ForwardRefExoticComponent<CheckboxProps & React.RefAttributes<HTMLLabelElement>>;
export default Checkbox;

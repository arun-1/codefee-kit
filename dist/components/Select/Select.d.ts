import React, { HtmlHTMLAttributes, ReactNode } from 'react';
import { SelectLayoutProps } from './SelectLayout';
import { SelectOptionType } from './Common';
export declare type SelectProps = {
    options: SelectOptionType[];
    selected?: SelectOptionType;
    onSelectedChange: (option: SelectOptionType) => void;
    optionTemplate?: (option: SelectOptionType, props: SelectProps) => ReactNode;
    selectedTemplate?: (selected: SelectOptionType | undefined, props: SelectProps) => ReactNode;
} & Partial<SelectLayoutProps> & HtmlHTMLAttributes<HTMLDivElement>;
declare const Select: React.ForwardRefExoticComponent<{
    options: SelectOptionType[];
    selected?: SelectOptionType | undefined;
    onSelectedChange: (option: SelectOptionType) => void;
    optionTemplate?: ((option: SelectOptionType, props: SelectProps) => ReactNode) | undefined;
    selectedTemplate?: ((selected: SelectOptionType | undefined, props: SelectProps) => ReactNode) | undefined;
} & Partial<SelectLayoutProps> & React.HtmlHTMLAttributes<HTMLDivElement> & React.RefAttributes<HTMLDivElement>>;
export default Select;

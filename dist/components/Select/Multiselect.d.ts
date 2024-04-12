import React, { HtmlHTMLAttributes, ReactNode } from 'react';
import { SelectOptionType } from './Common';
import { SelectLayoutProps } from './SelectLayout';
export interface MultiselectControlLabels {
    UnselectAll: ReactNode;
    SelectAll: ReactNode;
    Cancel: ReactNode;
    Apply: ReactNode;
}
export declare type MultiselectProps = {
    controlLabels?: MultiselectControlLabels;
    options: SelectOptionType[];
    selected?: SelectOptionType[];
    onSelectedChange: (options: SelectOptionType[]) => void;
    optionTemplate?: (option: SelectOptionType, internalSelected: SelectOptionType[], props: MultiselectProps) => ReactNode;
    selectedTemplate?: (selected: SelectOptionType[] | undefined, props: MultiselectProps) => ReactNode;
} & Partial<SelectLayoutProps> & HtmlHTMLAttributes<HTMLDivElement>;
export declare const DefaultSelectedTemplate: (options: SelectOptionType[]) => ReactNode;
export declare const DefaultOptionTemplate: (option: SelectOptionType, internalSelected: SelectOptionType[]) => ReactNode;
export interface HeaderControlsLayoutProps {
    labels: MultiselectControlLabels;
    onUnselectAll: () => void;
    onSelectAll: () => void;
}
export declare const HeaderControlsLayout: ({ labels, onUnselectAll, onSelectAll, }: HeaderControlsLayoutProps) => JSX.Element;
export interface FooterControlsLayoutProps {
    labels: MultiselectControlLabels;
    onCancel: () => void;
    onApply: () => void;
}
export declare const FooterControlsLayout: ({ labels, onCancel, onApply, }: FooterControlsLayoutProps) => JSX.Element;
declare const Multiselect: React.ForwardRefExoticComponent<{
    controlLabels?: MultiselectControlLabels | undefined;
    options: SelectOptionType[];
    selected?: SelectOptionType[] | undefined;
    onSelectedChange: (options: SelectOptionType[]) => void;
    optionTemplate?: ((option: SelectOptionType, internalSelected: SelectOptionType[], props: MultiselectProps) => ReactNode) | undefined;
    selectedTemplate?: ((selected: SelectOptionType[] | undefined, props: MultiselectProps) => ReactNode) | undefined;
} & Partial<SelectLayoutProps> & React.HtmlHTMLAttributes<HTMLDivElement> & React.RefAttributes<HTMLDivElement>>;
export default Multiselect;

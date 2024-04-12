import { FormControlProps } from '../../common/Types';
import React, { ReactNode, Dispatch, HtmlHTMLAttributes } from 'react';
export declare type SelectLayoutProps = {
    className?: string;
    label?: ReactNode;
    open: boolean;
    optionNodes: ReactNode;
    selectedDisplay: ReactNode;
    onClickOutside?: () => void;
    setOpen: Dispatch<React.SetStateAction<boolean>>;
} & FormControlProps & HtmlHTMLAttributes<HTMLDivElement>;
declare const SelectLayout: React.ForwardRefExoticComponent<{
    className?: string | undefined;
    label?: ReactNode;
    open: boolean;
    optionNodes: ReactNode;
    selectedDisplay: ReactNode;
    onClickOutside?: (() => void) | undefined;
    setOpen: Dispatch<React.SetStateAction<boolean>>;
} & FormControlProps & React.HtmlHTMLAttributes<HTMLDivElement> & React.RefAttributes<HTMLDivElement>>;
export default SelectLayout;

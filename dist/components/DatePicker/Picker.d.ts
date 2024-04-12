import React, { Dispatch, HtmlHTMLAttributes, ReactNode } from 'react';
export declare type PickerProps = {
    open: boolean;
    input: ReactNode;
    selector: ReactNode;
    icon: ReactNode;
    hasFooterControls?: boolean;
    setOpen: Dispatch<React.SetStateAction<boolean>>;
    onOk?: () => void;
    onCancel?: () => void;
    onClose?: () => void;
} & HtmlHTMLAttributes<HTMLDivElement>;
declare const Picker: React.ForwardRefExoticComponent<{
    open: boolean;
    input: ReactNode;
    selector: ReactNode;
    icon: ReactNode;
    hasFooterControls?: boolean | undefined;
    setOpen: Dispatch<React.SetStateAction<boolean>>;
    onOk?: (() => void) | undefined;
    onCancel?: (() => void) | undefined;
    onClose?: (() => void) | undefined;
} & React.HtmlHTMLAttributes<HTMLDivElement> & React.RefAttributes<HTMLDivElement>>;
export default Picker;

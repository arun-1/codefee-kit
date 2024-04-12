import React, { HtmlHTMLAttributes } from 'react';
import { DialogVariant } from './Common';
export declare type DialogProps = {
    isOpen: boolean;
    isMandatory?: boolean;
    variant?: DialogVariant;
    onClose?: () => void;
} & HtmlHTMLAttributes<HTMLDivElement>;
declare const Dialog: React.ForwardRefExoticComponent<{
    isOpen: boolean;
    isMandatory?: boolean | undefined;
    variant?: DialogVariant | undefined;
    onClose?: (() => void) | undefined;
} & React.HtmlHTMLAttributes<HTMLDivElement> & React.RefAttributes<HTMLDivElement>>;
export default Dialog;

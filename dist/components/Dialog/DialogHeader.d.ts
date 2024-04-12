import React, { HtmlHTMLAttributes } from 'react';
export declare type DialogHeaderProps = {
    onClose?: () => void;
} & HtmlHTMLAttributes<HTMLDivElement>;
declare const DialogHeader: React.ForwardRefExoticComponent<{
    onClose?: (() => void) | undefined;
} & React.HtmlHTMLAttributes<HTMLDivElement> & React.RefAttributes<HTMLDivElement>>;
export default DialogHeader;

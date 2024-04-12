import { DialogProps } from '../../components/Dialog';
import React, { ReactNode } from 'react';
export declare type ConfirmDialogProps = {
    confirmationTitle?: ReactNode;
    confirmLabel?: ReactNode;
    cancelLabel?: ReactNode;
    onConfirm?: () => void;
    onCancel?: () => void;
} & DialogProps;
declare const ConfirmDialog: React.ForwardRefExoticComponent<{
    confirmationTitle?: ReactNode;
    confirmLabel?: ReactNode;
    cancelLabel?: ReactNode;
    onConfirm?: (() => void) | undefined;
    onCancel?: (() => void) | undefined;
} & {
    isOpen: boolean;
    isMandatory?: boolean | undefined;
    variant?: import("../Dialog/Common").DialogVariant | undefined;
    onClose?: (() => void) | undefined;
} & React.HtmlHTMLAttributes<HTMLDivElement> & React.RefAttributes<HTMLDivElement>>;
export default ConfirmDialog;

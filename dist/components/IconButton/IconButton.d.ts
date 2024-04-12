import React, { ButtonHTMLAttributes } from 'react';
export declare type IconButtonVariantType = 'primary' | 'secondary' | 'subtle';
export interface IconButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: IconButtonVariantType;
}
declare const IconButton: React.ForwardRefExoticComponent<IconButtonProps & React.RefAttributes<HTMLButtonElement>>;
export default IconButton;

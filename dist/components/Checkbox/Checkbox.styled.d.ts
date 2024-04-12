/// <reference types="react" />
import { Gutter } from '../../common';
export declare type CheckboxCssVarProps = {
    '--cf-checkbox-color-border': string;
    '--cf-checkbox-color-border-hover': string;
    '--cf-checkbox-color-border-active': string;
    '--cf-checkbox-color-checked-bg': string;
    '--cf-checkbox-color-disabled': string;
    '--cf-checkbox-color-checkmark': string;
    '--cf-checkbox-color-checkmark-disabled': string;
    '--cf-checkbox-color-label': string;
};
export declare const Checkbox: import("styled-components").StyledComponent<"label", any, {
    disabled?: boolean | undefined;
    gutterBottom: Gutter;
}, never>;
export declare const Checkmark: import("styled-components").StyledComponent<"span", any, {
    checked: boolean;
    disabled?: boolean | undefined;
}, never>;
export declare const Input: import("styled-components").StyledComponent<"input", any, {}, never>;
export declare const Label: import("styled-components").StyledComponent<import("react").FC<import("components/Typography").TypographyProps>, any, {}, never>;

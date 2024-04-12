/// <reference types="react" />
import { FormControlProps } from '../../common/Types';
export declare type SelectCssVarProps = {
    '--cf-select-border': string;
    '--cf-select-border-color-hover': string;
    '--cf-select-border-color-focus': string;
    '--cf-select-background-color': string;
};
export declare const Host: import("styled-components").StyledComponent<"div", any, {}, never>;
export declare const Select: import("styled-components").StyledComponent<"div", any, {
    open: boolean;
} & FormControlProps, never>;
export declare const AngleIcon: import("styled-components").StyledComponent<import("react").ForwardRefExoticComponent<import("components/Icons").IconProps & import("react").RefAttributes<SVGSVGElement>>, any, {
    open: boolean;
}, never>;
export declare const OptionContainer: import("styled-components").StyledComponent<"div", any, {
    open: boolean;
}, never>;

/// <reference types="react" />
export declare type InputCssVar = {
    '--cf-input-border': string;
    '--cf-input-background-color': string;
};
export declare const InputContainer: import("styled-components").StyledComponent<"div", any, {}, never>;
export declare const Input: import("styled-components").StyledComponent<"input", any, {
    id?: string | undefined;
    label?: import("react").ReactNode;
} & import("../..").FormControlProps & import("react").InputHTMLAttributes<HTMLInputElement>, never>;

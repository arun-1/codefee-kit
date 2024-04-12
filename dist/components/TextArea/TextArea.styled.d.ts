/// <reference types="react" />
export declare type TextAreaCssVar = {
    '--cf-textarea-border': string;
    '--cf-textarea-background-color': string;
};
export declare const TextAreaContainer: import("styled-components").StyledComponent<"div", any, {}, never>;
export declare const TextArea: import("styled-components").StyledComponent<"textarea", any, {
    id?: string | undefined;
    label?: import("react").ReactNode;
} & import("../..").FormControlProps & import("react").TextareaHTMLAttributes<HTMLTextAreaElement>, never>;

/// <reference types="react" />
export declare const ConfirmDialog: import("styled-components").StyledComponent<import("react").ForwardRefExoticComponent<{
    isOpen: boolean;
    isMandatory?: boolean | undefined;
    variant?: import("../Dialog/Common").DialogVariant | undefined;
    onClose?: (() => void) | undefined;
} & import("react").HtmlHTMLAttributes<HTMLDivElement> & import("react").RefAttributes<HTMLDivElement>>, any, {}, never>;
export declare const Content: import("styled-components").StyledComponent<"div", any, {}, never>;
export declare const Button: import("styled-components").StyledComponent<import("react").ForwardRefExoticComponent<import("components/Button").ButtonProps & import("react").RefAttributes<HTMLButtonElement>>, any, {}, never>;

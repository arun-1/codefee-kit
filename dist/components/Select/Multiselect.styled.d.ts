/// <reference types="react" />
export { Label } from './Select.styled';
export declare const MultiselectLayout: import("styled-components").StyledComponent<import("react").ForwardRefExoticComponent<{
    className?: string | undefined;
    label?: import("react").ReactNode;
    open: boolean;
    optionNodes: import("react").ReactNode;
    selectedDisplay: import("react").ReactNode;
    onClickOutside?: (() => void) | undefined;
    setOpen: import("react").Dispatch<import("react").SetStateAction<boolean>>;
} & import("../..").FormControlProps & import("react").HtmlHTMLAttributes<HTMLDivElement> & import("react").RefAttributes<HTMLDivElement>>, any, {}, never>;
export declare const CheckboxOption: import("styled-components").StyledComponent<import("react").ForwardRefExoticComponent<import("components/Checkbox").CheckboxProps & import("react").RefAttributes<HTMLLabelElement>>, any, {}, never>;
export declare const MultiselectOption: import("styled-components").StyledComponent<"li", any, {}, never>;
export declare const ControlsLayout: import("styled-components").StyledComponent<"div", any, {}, never>;
export declare const HeaderControlsLayout: import("styled-components").StyledComponent<"div", any, {}, never>;
export declare const FooterControlsLayout: import("styled-components").StyledComponent<"div", any, {}, never>;
export declare const ControlButton: import("styled-components").StyledComponent<"button", any, {}, never>;
export declare const ControlButtonText: import("styled-components").StyledComponent<import("react").FC<import("components/Typography").TypographyProps>, any, {}, never>;

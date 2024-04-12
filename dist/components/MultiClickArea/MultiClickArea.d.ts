import React, { HtmlHTMLAttributes } from 'react';
export declare type MultiClickAreaProps = {
    countTarget?: number;
    debounceTime?: number;
} & HtmlHTMLAttributes<HTMLDivElement>;
declare const MultiClickArea: React.ForwardRefExoticComponent<{
    countTarget?: number | undefined;
    debounceTime?: number | undefined;
} & React.HtmlHTMLAttributes<HTMLDivElement> & React.RefAttributes<HTMLDivElement>>;
export default MultiClickArea;

import { Time } from '../../utils/TimeHelper';
declare type Convertor = (next: string, prev: string) => string;
export declare const sanitizeDateInput: Convertor;
export declare const sanitizeDateTimeInput: (next: string, prev: string) => string;
export declare const isValidDate: (value: string) => boolean;
export declare const isValidTime: (value: string) => boolean;
export declare const getTimeFromStr: (value: string) => Time | null;
export declare type DatePickerCssVar = {
    '--cf-date-picker-background-color': string;
    '--cf-date-picker-icon-dimension': string;
    '--cf-date-picker-icon-margin-right': string;
};
export declare const defaultCssVar: import("styled-components").FlattenSimpleInterpolation, cssVar: (p: keyof DatePickerCssVar) => string;
export {};

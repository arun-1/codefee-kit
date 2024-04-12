import { FormFieldValidator } from './common';
/**
 * Compose form validators into a single form validator
 * @param validators Form Validators
 * @returns A combined form validator
 */
export declare const compose: <T>(...validators: FormFieldValidator<T>[]) => (val: T) => boolean;
/**
 * Check if value is more than or equal to defined minimum
 * @param minVal Min value
 * @returns Boolean value
 */
export declare const min: (minVal: number) => FormFieldValidator<number>;
/**
 * Check if value is less than or equal to defined maximum
 * @param maxVal Max value
 * @returns Boolean value
 */
export declare const max: (maxVal: number) => FormFieldValidator<number>;
/**
 * Check if value is in within range
 * @param minVal Min value
 * @param maxVal Max value
 * @param isIncludeBoundaries If true, min and max values are included. Else, they are excluded. Default is `false`
 * @returns Boolean value
 */
export declare const between: (minVal: number, maxVal: number, isIncludeBoundaries?: boolean) => FormFieldValidator<number>;
/**
 * Check if the value is not a falsy value
 * Refer to https://developer.mozilla.org/en-US/docs/Glossary/Falsy
 *
 * @param val Value
 * @returns Boolean value
 */
export declare const notFalsy: FormFieldValidator<unknown>;
/**
 * Check if the value is not empty string
 * @param val Value
 * @returns Boolean value
 */
export declare const notEmptyString: FormFieldValidator<string>;
/**
 * Check if the value is not null
 * @param val Value
 * @returns Boolean value
 */
export declare const notNull: FormFieldValidator<unknown>;
/**
 * Check if the value is not undefined
 * @param val Value
 * @returns Boolean value
 */
export declare const notUndefined: FormFieldValidator<unknown>;

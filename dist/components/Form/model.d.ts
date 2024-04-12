import { FormDefinition, FormValidationProcessingResult, FormValidationResult } from './common';
/**
 * Model representaton of a Form
 */
export declare class VirtualForm<T extends Record<string, unknown>> {
    value: T;
    formDef: FormDefinition<T>;
    private isTouched$;
    private validationResult$;
    constructor(formDef: FormDefinition<T>);
    get validationResult(): FormValidationResult;
    /**
     * Check if the form value has changed since init/reset
     */
    get isTouched(): boolean;
    /**
     * Set new value for the form
     * @param value New form value
     * @returns
     */
    setValue(value: T): T;
    /**
     * Reset form to its initial state
     */
    reset(): void;
    /**
     * Executes form validation asynchronously
     * @returns A promise of validation result
     */
    validate(): Promise<FormValidationProcessingResult>;
    hasError(field: string): boolean;
    /**
     * Reset nested forms in form value
     */
    private resetChildForms;
    /**
     * Create a Proxy to intercept get/set of the Form value
     * @param val Form value
     * @returns
     */
    private makeValueProxy;
    /**
     * Executes when Form value changes
     * @param newValue Updated Form value
     */
    private performChanges;
}
/**
 * Return a VirtualForm instance
 * @param formDef Form definition
 * @returns
 */
export declare const defineForm: <T extends Record<string, unknown>>(formDef: FormDefinition<T>) => VirtualForm<T>;
/**
 * Hook to create and access VirtualForm
 */
export declare const useForm: <T extends Record<string, unknown>>(formDef: FormDefinition<T>) => VirtualForm<T> | undefined;

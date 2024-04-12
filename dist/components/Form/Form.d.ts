import React, { FormHTMLAttributes } from 'react';
import { FormDefinition } from './common';
import { VirtualForm } from './model';
export declare type FormProps<T extends Record<string, unknown>> = Omit<FormHTMLAttributes<HTMLFormElement>, 'onSubmit'> & {
    formDef: FormDefinition<T>;
    render: (vform: VirtualForm<T>) => JSX.Element;
    onSubmit?: (value?: VirtualForm<T>) => void;
};
declare const Form: React.ForwardRefExoticComponent<Omit<React.FormHTMLAttributes<HTMLFormElement>, "onSubmit"> & {
    formDef: FormDefinition<Record<string, unknown>>;
    render: (vform: VirtualForm<Record<string, unknown>>) => JSX.Element;
    onSubmit?: ((value?: VirtualForm<Record<string, unknown>> | undefined) => void) | undefined;
} & React.RefAttributes<HTMLFormElement>>;
export default Form;

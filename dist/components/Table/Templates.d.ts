import { ReactNode } from 'react';
import { DataColumnDefinition, FooterColumnDefinition, OrderByDirection } from './Common';
export declare const defaultBodyRowTemplate: (colDefs: DataColumnDefinition[], data: any, rowIndex: number, isClickable: boolean, onClickRow?: ((data: any) => void) | undefined) => ReactNode;
export declare const defaultHeaderRowTemplate: (colDefs: DataColumnDefinition[], sortState: [string, OrderByDirection], onClickHeader?: ((colDef: DataColumnDefinition) => void) | undefined) => ReactNode;
export declare const defaultFooterRowTemplate: (footerDefs: FooterColumnDefinition[]) => ReactNode;
export declare const defaultEmptyRecordTemplate: (emptyRecordContent: ReactNode) => JSX.Element;

import React, { ReactNode, TableHTMLAttributes } from 'react';
import { DataColumnDefinition, FooterColumnDefinition, OrderByDirection } from './Common';
export declare type TableProps = {
    data: any[];
    colDefs: DataColumnDefinition[];
    footerDefs?: FooterColumnDefinition[];
    emptyRecordContent?: ReactNode;
    onClickHeader?: (colDef: DataColumnDefinition) => void;
    onClickRow?: (data: any) => void;
    rowTemplate?: (colDef: DataColumnDefinition[], data: any, rowIndex: number, isClickable: boolean, onClickRow?: (data: any) => void) => ReactNode;
    headerRowTemplate?: (colDefs: DataColumnDefinition[], sortState: [string, OrderByDirection], onClickHeader?: (colDef: DataColumnDefinition) => void) => ReactNode;
    footerRowTemplate?: (colDef: FooterColumnDefinition[]) => ReactNode;
    emptyRecordTemplate?: (emptyRecordContent: ReactNode) => ReactNode;
} & TableHTMLAttributes<HTMLTableElement>;
declare const Table: React.ForwardRefExoticComponent<{
    data: any[];
    colDefs: DataColumnDefinition[];
    footerDefs?: FooterColumnDefinition[] | undefined;
    emptyRecordContent?: ReactNode;
    onClickHeader?: ((colDef: DataColumnDefinition) => void) | undefined;
    onClickRow?: ((data: any) => void) | undefined;
    rowTemplate?: ((colDef: DataColumnDefinition[], data: any, rowIndex: number, isClickable: boolean, onClickRow?: ((data: any) => void) | undefined) => ReactNode) | undefined;
    headerRowTemplate?: ((colDefs: DataColumnDefinition[], sortState: [string, OrderByDirection], onClickHeader?: ((colDef: DataColumnDefinition) => void) | undefined) => ReactNode) | undefined;
    footerRowTemplate?: ((colDef: FooterColumnDefinition[]) => ReactNode) | undefined;
    emptyRecordTemplate?: ((emptyRecordContent: ReactNode) => ReactNode) | undefined;
} & React.TableHTMLAttributes<HTMLTableElement> & React.RefAttributes<HTMLTableElement>>;
export default Table;

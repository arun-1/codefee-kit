import { ListObjectRequiredProps } from '../../common';
import { CSSProperties, ReactNode } from 'react';
export declare type Alignment = 'left' | 'right' | 'center';
export declare type TableSegment = 'head' | 'body' | 'foot';
export declare type OrderByDirection = 'asc' | 'desc';
export declare const FlexAlignmentMap: {
    [key in Alignment]: string;
};
export declare type ColumnDefinition = {
    /**
     * The size ratio of the column
     */
    size?: number;
    /**
     * The fixed width dp. This will supersede the `size` props
     */
    fixedSize?: number;
    /**
     * Alignment within the column (left, center, right)
     */
    align?: Alignment;
};
export declare type DataColumnDefinition = {
    header?: string;
    field?: string;
    disableSort?: boolean;
    render?: (cellData: any, rowData: any) => ReactNode;
} & ColumnDefinition & ListObjectRequiredProps<number>;
export declare type FooterColumnDefinition = {
    value?: ReactNode;
} & ColumnDefinition & ListObjectRequiredProps<number>;
export declare type SortKey = [string, OrderByDirection];
export declare const defaultSortKey: SortKey;
export declare const getColumnStyle: (current: ColumnDefinition, colDefs: ColumnDefinition[]) => CSSProperties;
export declare const trySortData: (data: any, colDef: DataColumnDefinition, sortKey: SortKey, onSort: (output: [updatedSortKey: SortKey, sortedData: any]) => void) => void;
export declare const getContentTitle: (node: ReactNode) => string | undefined;

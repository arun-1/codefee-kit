/// <reference types="react" />
import { Alignment, OrderByDirection, TableSegment } from './Common';
export declare type TableCssVarProps = {
    '--cf-table-background-color': string;
    '--cf-table-head-row-height': string;
    '--cf-table-body-row-height': string;
    '--cf-table-foot-row-height': string;
    '--cf-table-row-border-color': string;
    '--cf-table-sort-active-color': string;
};
export declare const Table: import("styled-components").StyledComponent<"table", any, {}, never>;
export declare const THead: import("styled-components").StyledComponent<"thead", any, {}, never>;
export declare const TBody: import("styled-components").StyledComponent<"tbody", any, {}, never>;
declare type TrProps = {
    segment?: TableSegment;
    isClickable?: boolean;
};
export declare const Tr: import("styled-components").StyledComponent<"tr", any, TrProps, never>;
export declare const EmptyRecordTr: import("styled-components").StyledComponent<"tr", any, {}, never>;
export declare const EmptyRecordTd: import("styled-components").StyledComponent<"td", any, {}, never>;
declare type ThProps = {
    align: Alignment;
    sortable?: boolean;
    isSortActive?: boolean;
};
export declare const Th: import("styled-components").StyledComponent<"th", any, ThProps, never>;
export declare const Td: import("styled-components").StyledComponent<"td", any, {
    align: Alignment;
}, never>;
export declare const CellContent: import("styled-components").StyledComponent<"div", any, {}, never>;
export declare const TFooter: import("styled-components").StyledComponent<"tfoot", any, {}, never>;
export declare const SortIcon: import("styled-components").StyledComponent<import("react").ForwardRefExoticComponent<import("components/Icons").IconProps & import("react").RefAttributes<SVGSVGElement>>, any, {
    direction: OrderByDirection;
}, never>;
export {};

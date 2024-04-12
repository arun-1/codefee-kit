import { FC, MouseEvent } from 'react';
import { DayPeriod } from '../../utils/DateHelper';
import { IconButtonProps } from '../IconButton';
export declare type DateInfoLevel = 'year' | 'month' | 'day';
declare type TileIconButtonProps = {
    isActive: boolean;
} & IconButtonProps;
export declare const TileIconButton: FC<TileIconButtonProps>;
declare type DayTileIconButtonProps = {
    dayPeriod: DayPeriod;
} & TileIconButtonProps;
export declare const DayTileIconButton: FC<DayTileIconButtonProps>;
export declare const NavIconButton: FC<IconButtonProps>;
export declare const switchLevel: <T extends unknown>(level: DateInfoLevel, dayFunc?: (() => T) | undefined, monthFunc?: (() => T) | undefined, yearFunc?: (() => T) | undefined, defaultFunc?: (() => T) | undefined) => T | undefined;
export declare const withStopPropagation: (func: () => void) => (e: MouseEvent<HTMLButtonElement>) => void;
export {};

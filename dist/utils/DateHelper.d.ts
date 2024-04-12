import { EasyTime } from './TimeHelper';
export declare type DayPeriod = 'current' | 'prev' | 'next';
export declare type DateDisplayReservedWords = 'yyyy' | 'MM' | 'MMM' | 'dd' | 'hh' | 'mm' | 'ampm';
export declare const defaultMonthLabels: string[];
export declare type Day = {
    type: DayPeriod;
    easyDate: EasyDate;
};
export declare type EasyDateOptions = {
    yearFrame: number;
};
export declare const defaultEasyDateOptions: EasyDateOptions;
export declare class EasyDate {
    value: Date;
    private options;
    constructor(date?: Date, options?: EasyDateOptions);
    get year(): number;
    get month(): number;
    get date(): number;
    get firstDay(): number;
    get lastDay(): number;
    get daysInMonth(): number;
    get daysInMonthArr(): Day[];
    get daysInMonthArrPadded(): Day[];
    get yearsInFrame(): number[];
    get yearsInFrameRange(): [number, number];
    get previousYearByFrame(): EasyDate;
    get nextYearByFrame(): EasyDate;
    get previousMonth(): EasyDate;
    get nextMonth(): EasyDate;
    get time(): EasyTime;
    format(format?: string, monthLabels?: string[]): string;
    setMonth(month: number): EasyDate;
    setYear(year: number): EasyDate;
    setHours(hours: number): EasyDate;
    setMinutes(minutes: number): EasyDate;
    private get yearFrame();
}

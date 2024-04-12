export declare type Time = {
    hours: number;
    minutes: number;
    seconds?: number;
};
export declare type TimeUnit = 'hour' | 'minute' | 'second';
export declare type TimePeriod = 'AM' | 'PM';
export declare const padTime: (val: string) => string;
export declare class EasyTime {
    value: Time;
    constructor(time?: Time);
    get hours(): number;
    get normalizedHours(): number;
    get minutes(): number;
    get seconds(): number;
    get hoursString(): string;
    get minutesString(): string;
    get secondsString(): string;
    get clonedValue(): Time;
    setTime(value: Time): EasyTime;
    setHours(hours: number): EasyTime;
    setHoursWithTimePeriod(hours: number, timePeriod: TimePeriod): EasyTime;
    setValueWithTimePeriod({ hours }: Time, timePeriod: TimePeriod): EasyTime;
    setMinutes(minutes: number): EasyTime;
    setSeconds(seconds: number): EasyTime;
    setPeriod(timePeriod: TimePeriod): EasyTime;
    get timePeriod(): TimePeriod;
    format(): string;
}

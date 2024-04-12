import { FC } from 'react';
import { CalendarPanelOptions } from '../../components/CalendarPanel';
import { EasyDate } from '../../utils/DateHelper';
declare type DateTimeSelectorProps = {
    dateTime?: EasyDate;
    calendarPanelOptions?: CalendarPanelOptions;
    onDateChange?: (date?: Date) => void;
    onTimeChange?: (date?: Date) => void;
    onMinuteChange: (date?: Date) => void;
};
declare const DateTimeSelector: FC<DateTimeSelectorProps>;
export default DateTimeSelector;

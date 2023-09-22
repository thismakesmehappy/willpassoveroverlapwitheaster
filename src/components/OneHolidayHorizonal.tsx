import { formatDatesLong, formatDatesShort } from "../helpers/formatDates.ts";
import { DateAndHoliday } from "../helpers/DateAndHoliday.ts";

interface Props {
  holiday: DateAndHoliday;
  short: boolean | null;
}

export function OneHolidayHorizonal({ holiday, short }: Props) {
  return (
    <div className="one-holiday one-holiday-horizontal">
      {holiday.holiday} <i className="bi bi-arrow-right"></i>{" "}
      {short ? formatDatesShort(holiday.date) : formatDatesLong(holiday.date)}
    </div>
  );
}

import { formatDatesLong, formatDatesShort } from "helpers";
import { DateAndHoliday } from "helpers";

interface Props {
  holiday: DateAndHoliday;
  short: boolean | null;
  className?: string;
}

export function OneHolidayHorizontal({ holiday, short, className }: Props) {
  return (
    <p className={"one-holiday one-holiday-horizontal" + className}>
      {holiday.holiday} <i className="bi bi-arrow-right"></i>{" "}
      {short ? formatDatesShort(holiday.date) : formatDatesLong(holiday.date)}
    </p>
  );
}

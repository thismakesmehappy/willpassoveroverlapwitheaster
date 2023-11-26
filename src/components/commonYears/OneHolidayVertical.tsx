import { formatDatesLong, formatDatesShort } from "helpers";
import "bootstrap-icons/font/bootstrap-icons.css";
import { DateAndHoliday } from "helpers";

interface Props {
  holiday: DateAndHoliday;
  short: boolean | null;
  className?: string;
}

export const OneHolidayVertical = ({ holiday, short, className }: Props) => {
  return (
    <div
      className={
        "one-holiday one-holiday-vertical col col-12 col-md-4  " + className
      }
    >
      {short ? formatDatesShort(holiday.date) : formatDatesLong(holiday.date)}
      <br />
      {holiday.holiday}
      <br />

      {holiday.icon && <i className={"bi " + holiday.icon} />}
    </div>
  );
};

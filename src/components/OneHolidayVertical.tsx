import { formatDatesLong, formatDatesShort } from "../helpers/formatDates.ts";
import "bootstrap-icons/font/bootstrap-icons.css";
import { DateAndHoliday } from "../helpers/DateAndHoliday.ts";

interface Props {
  holiday: DateAndHoliday;
  short: boolean | null;
}

export const OneHolidayVertical = ({ holiday, short }: Props) => {
  return (
    <>
      {short ? formatDatesShort(holiday.date) : formatDatesLong(holiday.date)}
      <br />
      {holiday.holiday}
      <br />

      {holiday.icon && <i className={"bi " + holiday.icon} />}
    </>
  );
};

export default OneHolidayVertical;
import { formatDatesLong, formatDatesShort } from "../helpers/formatDates.ts";
import { DateAndHoliday } from "./FeaturedOneHoliday.tsx";
import "bootstrap-icons/font/bootstrap-icons.css";

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

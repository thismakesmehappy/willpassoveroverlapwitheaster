import { formatDatesLong, formatDatesShort } from "../helpers/formatDates.ts";
import { DateAndHoliday } from "./FeaturedOneHoliday.tsx";

interface Props {
  holiday: DateAndHoliday;
  short: boolean | null;
}

export function OneHolidayHorizonal({ holiday, short }: Props) {
  return (
    <>
      {holiday.holiday} <i className="bi bi-arrow-right"></i>{" "}
      {short ? formatDatesShort(holiday.date) : formatDatesLong(holiday.date)}
    </>
  );
}

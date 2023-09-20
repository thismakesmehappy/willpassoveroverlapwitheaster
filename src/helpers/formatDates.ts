import { days, daysShort, months, monthsShort } from "../css/data/enums.ts";

export const formatDatesLong = (date: Date) => {
  return (
    days[date.getDay()] + ", " + months[date.getMonth()] + " " + date.getDate()
  );
};

export const formatDatesShort = (date: Date) => {
  return (
    daysShort[date.getDay()] +
    ". " +
    monthsShort[date.getMonth()] +
    " " +
    date.getDate()
  );
};

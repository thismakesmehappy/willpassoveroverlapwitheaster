import { days, months } from "./enums.ts";

export const formatDatesLong = (date: Date) => {
  return (
    days[date.getDay()] + ", " + months[date.getMonth()] + " " + date.getDate()
  );
};

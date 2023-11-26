import { getHolidaysForYear, PassoverAndEasterSunday } from "helpers";
import { getYearForNextHolidays } from "helpers";

export const getNextX = (x: number, numberOfDays: number) => {
  const startYear = getYearForNextHolidays(numberOfDays);

  const nextX: Array<PassoverAndEasterSunday> = [];

  for (let i = 0; i < x; i++) {
    const year = startYear + i;
    nextX.push(getHolidaysForYear(year, numberOfDays));
  }

  return nextX;
};

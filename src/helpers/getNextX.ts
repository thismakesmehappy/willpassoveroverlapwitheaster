import getHolidaysForYear, { PassoverAndEaster } from "./getHolidaysForYear.ts";
import getYearForNextHolidays from "./getYearForNextHolidays.ts";

const getNextX = (x: number, numberOfDays: number) => {
  const startYear = getYearForNextHolidays(numberOfDays);

  const nextX: Array<PassoverAndEaster> = [];

  for (let i = 0; i < x; i++) {
    const year = startYear + i;
    nextX.push(getHolidaysForYear(year, numberOfDays));
  }

  return nextX;
};

export default getNextX;

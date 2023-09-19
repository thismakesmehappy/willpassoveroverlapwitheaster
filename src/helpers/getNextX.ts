import getPassoverForYear from "./getPassoverForYear.ts";
import getEasterForYear from "./getEasterForYear.ts";
import getHolidaysForYear, { PassoverAndEaster } from "./getHolidaysForYear.ts";
import getYearForNextHolidays from "./getYearForNextHolidays.ts";

const getNextX = (x: number) => {
  const startYear = getYearForNextHolidays();

  const nextX: Array<PassoverAndEaster> = [];

  for (let i = 0; i < x; i++) {
    const year = startYear + i;
    nextX.push(getHolidaysForYear(year));
  }

  return nextX;
};

export default getNextX;

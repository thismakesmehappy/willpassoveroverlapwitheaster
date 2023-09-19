import getPassoverForYear from "./getPassoverForYear.ts";
import getEasterForYear from "./getEasterForYear.ts";
import getHolidaysForYear, { PassoverAndEaster } from "./getHolidaysForYear.ts";

const getNextX = (x: number) => {
  const today = new Date();
  let startYear = today.getFullYear();
  const thisPassover = getPassoverForYear(startYear);
  const thisEaster = getEasterForYear(startYear);
  if (thisPassover.end < today && thisEaster < today) {
    startYear += 1;
  }

  const nextX: Array<PassoverAndEaster> = [];

  for (let i = 0; i < x; i++) {
    const year = startYear + i;
    nextX.push(getHolidaysForYear(year));
  }

  return nextX;
};

export default getNextX;

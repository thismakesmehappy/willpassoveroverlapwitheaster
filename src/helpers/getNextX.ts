import getPassoverForYear, { PassoverDates } from "./getPassoverForYear.ts";
import getEasterForYear from "./getEasterForYear.ts";
import getDoEasterAndPassoverOverlap from "./getDoEasterAndPassoverOverlap.ts";

export interface PassoverAndEaster {
  year: number;
  passoverStart: Date;
  passoverEnd: Date;
  easterDate: Date;
  overlap: boolean;
}

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
    const passover: PassoverDates = getPassoverForYear(year);
    const easter: Date = getEasterForYear(year);
    const overlap: boolean = getDoEasterAndPassoverOverlap(passover, easter);
    nextX.push({
      year: year,
      passoverStart: passover.start,
      passoverEnd: passover.end,
      easterDate: easter,
      overlap: overlap,
    });
  }

  return nextX;
};

export default getNextX;

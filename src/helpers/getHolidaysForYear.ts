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

const getHolidaysForYear = (year: number) => {
  const passover: PassoverDates = getPassoverForYear(year);
  const easter: Date = getEasterForYear(year);
  const overlap: boolean = getDoEasterAndPassoverOverlap(passover, easter);

  return {
    year: year,
    passoverStart: passover.start,
    passoverEnd: passover.end,
    easterDate: easter,
    overlap: overlap,
  };
};

export default getHolidaysForYear;

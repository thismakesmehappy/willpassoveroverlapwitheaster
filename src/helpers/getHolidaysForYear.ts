import { getPassoverForYear, PassoverDates } from "helpers";
import { getEasterSundayForYear } from "helpers";
import { getDoEasterSundayAndPassoverOverlap } from "helpers";

export interface PassoverAndEasterSunday {
  year: number;
  passoverStart: Date;
  passoverEnd: Date;
  easterSundayDate: Date;
  overlap: boolean;
}

export const getHolidaysForYear = (year: number, passoverDays: number = 8) => {
  const passover: PassoverDates = getPassoverForYear(year, passoverDays);
  const easterSunday: Date = getEasterSundayForYear(year);
  const overlap: boolean = getDoEasterSundayAndPassoverOverlap(
    passover,
    easterSunday,
  );

  return {
    year: year,
    passoverStart: passover.start,
    passoverEnd: passover.end,
    easterSundayDate: easterSunday,
    overlap: overlap,
  } as PassoverAndEasterSunday;
};

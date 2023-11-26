import { getPassoverForYear } from "helpers";
import { getEasterSundayForYear } from "helpers";

export const getYearForNextHolidays = (passoverDays: number) => {
  const today = new Date();
  let startYear = today.getFullYear();
  const thisPassover = getPassoverForYear(startYear, passoverDays);
  const thisEasterSunday = getEasterSundayForYear(startYear);
  if (thisPassover.end < today && thisEasterSunday < today) {
    startYear += 1;
  }

  return startYear;
};

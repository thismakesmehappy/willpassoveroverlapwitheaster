import getPassoverForYear from "helpers/getPassoverForYear.ts";
import getEasterSundayForYear from "helpers/getEasterSundayForYear.ts";

const getYearForNextHolidays = (passoverDays: number) => {
  const today = new Date();
  let startYear = today.getFullYear();
  const thisPassover = getPassoverForYear(startYear, passoverDays);
  const thisEasterSunday = getEasterSundayForYear(startYear);
  if (thisPassover.end < today && thisEasterSunday < today) {
    startYear += 1;
  }

  return startYear;
};

export default getYearForNextHolidays;

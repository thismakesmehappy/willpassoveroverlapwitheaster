import getPassoverForYear from "./getPassoverForYear.ts";
import getEasterForYear from "./getEasterForYear.ts";

const getYearForNextHolidays = () => {
  const today = new Date();
  let startYear = today.getFullYear();
  const thisPassover = getPassoverForYear(startYear);
  const thisEaster = getEasterForYear(startYear);
  if (thisPassover.end < today && thisEaster < today) {
    startYear += 1;
  }

  return startYear;
};

export default getYearForNextHolidays;

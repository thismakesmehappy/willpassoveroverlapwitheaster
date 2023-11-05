import getPassoverForYear from "./getPassoverForYear.ts";
import getEasterSundayForYear from "./getEasterSundayForYear.ts";

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

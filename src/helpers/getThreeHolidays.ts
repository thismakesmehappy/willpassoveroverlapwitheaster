import { PassoverAndEasterSunday } from "./getHolidaysForYear.ts";
import { icons } from "../data/enums.ts";
import { holiday1, holiday2 } from "../data/constants.ts";

const passoverStart = holiday1 + " Start";
const passoverEnd = holiday1 + " End";
const easterSunday = holiday2;

export const getThreeHolidays = (holidays: PassoverAndEasterSunday) => {
  const passoverStartHoliday = {
    date: holidays.passoverStart,
    holiday: passoverStart,
    icon: icons.start,
  };
  const passoverEndHoliday = {
    date: holidays.passoverEnd,
    holiday: passoverEnd,
    icon: icons.end,
  };
  const easterSundayHoliday = {
    date: holidays.easterSundayDate,
    holiday: easterSunday,
    icon: icons.whole,
  };
  if (holidays.easterSundayDate < holidays.passoverStart) {
    return [easterSundayHoliday, passoverStartHoliday, passoverEndHoliday];
  } else if (holidays.easterSundayDate > holidays.passoverEnd) {
    return [passoverStartHoliday, passoverEndHoliday, easterSundayHoliday];
  } else {
    return [passoverStartHoliday, easterSundayHoliday, passoverEndHoliday];
  }
};

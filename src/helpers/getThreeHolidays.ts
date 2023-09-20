import { PassoverAndEaster } from "./getHolidaysForYear.ts";
import { icons } from "../data/enums.ts";

const passoverStart = "Passover Start";
const passoverEnd = "Passover End";
const easter = "Easter";

export const getThreeHolidays = (holidays: PassoverAndEaster) => {
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
  const easterHoliday = {
    date: holidays.easterDate,
    holiday: easter,
    icon: icons.whole,
  };
  if (holidays.easterDate < holidays.passoverStart) {
    return [easterHoliday, passoverStartHoliday, passoverEndHoliday];
  } else if (holidays.easterDate > holidays.passoverEnd) {
    return [passoverStartHoliday, passoverEndHoliday, easterHoliday];
  } else {
    return [passoverStartHoliday, easterHoliday, passoverEndHoliday];
  }
};

// https://www.npmjs.com/package/@hebcal/core#HebrewCalendar.getHolidaysForYear
import { HebrewCalendar } from "@hebcal/core";

export interface PassoverDates {
  start: Date;
  end: Date;
}

const passoverStartDescription: string = "Erev Pesach";
const passoverEndDescriptionSevenDays: string = "Pesach VII";
const passoverEndDescriptionEightDays: string = "Pesach VIII";

export const getPassoverForYear = (year: number, passoverDays: number) => {
  const options = {
    year: year,
    isHebrewYear: false,
  };
  const passoverEndDescription =
    passoverDays === 8
      ? passoverEndDescriptionEightDays
      : passoverEndDescriptionSevenDays;

  let passoverStart: Date = new Date();
  let passoverEnd: Date = new Date();

  const holidaysForYear = HebrewCalendar.calendar(options);

  holidaysForYear.forEach((event) => {
    if (event.desc === passoverStartDescription) {
      passoverStart = event.getDate().greg();
    }
    if (event.desc === passoverEndDescription) {
      passoverEnd = event.getDate().greg();
    }
  });

  // TODO: Verify dates are valid before returning
  return {
    start: passoverStart,
    end: passoverEnd,
  } as PassoverDates;
};

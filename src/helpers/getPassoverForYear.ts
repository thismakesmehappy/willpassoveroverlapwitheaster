// https://www.npmjs.com/package/@hebcal/core#HebrewCalendar.getHolidaysForYear
import { HebrewCalendar } from "@hebcal/core";

export interface PassoverDates {
  start: Date;
  end: Date;
}

const passoverStartDescription: string = "Erev Pesach";
const passoverEndDescriotion: string = "Pesach VIII";

const getPassoverForYear = (year: number) => {
  const options = {
    year: year,
    isHebrewYear: false,
  };

  let passoverStart: Date = new Date();
  let passoverEnd: Date = new Date();

  const holidaysForYear = HebrewCalendar.calendar(options);

  holidaysForYear.forEach(
    (event: {
      desc: string;
      getDate: () => {
        (): never;
        new (): never;
        greg: { (): Date; new (): never };
      };
    }) => {
      if (event.desc === passoverStartDescription) {
        passoverStart = event.getDate().greg();
      }
      if (event.desc === passoverEndDescriotion) {
        passoverEnd = event.getDate().greg();
      }
    },
  );

  return {
    start: passoverStart,
    end: passoverEnd,
  } as PassoverDates;
};

export default getPassoverForYear;

// https://www.npmjs.com/package/date-holidays?activeTab=readme
import Holidays from "date-holidays";

const hd = new Holidays("US");
const easterSundayDescription: string = "Easter Sunday";

export const getEasterSundayForYear = (year: number) => {
  if (year <= 1000) {
    throw new Error("Year must be greater than 1000");
  }
  const holidaysForYear = hd.getHolidays(year);
  let easterSundayDate: Date = new Date();

  holidaysForYear.forEach((holiday) => {
    if (holiday.name == easterSundayDescription) {
      easterSundayDate = new Date(holiday.date);
    }
  });

  // TODO: Verify date is valid before returning
  return easterSundayDate;
};

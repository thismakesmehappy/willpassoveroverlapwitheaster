// https://www.npmjs.com/package/date-holidays?activeTab=readme
import Holidays from "date-holidays";

const hd = new Holidays("US");
const easterDescription: string = "Easter Sunday";

const getEasterForYear = (year: number) => {
  if (year <= 1000) {
    throw new Error("Year must be greater than 1000");
  }
  const holidaysForYear = hd.getHolidays(year);
  let easterDate: Date = new Date();

  holidaysForYear.forEach((holiday) => {
    if (holiday.name == easterDescription) {
      easterDate = new Date(holiday.date);
    }
  });

  return easterDate;
};

export default getEasterForYear;

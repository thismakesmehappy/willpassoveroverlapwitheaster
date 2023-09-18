// https://www.npmjs.com/package/date-holidays?activeTab=readme
import Holidays from "date-holidays";

const hd = new Holidays('US');
const easterDescription: string = "Easter Sunday";


const getEasterForYear = (year: number) => {
    const holidaysForYear = hd.getHolidays(year);
    let easterDate: Date = new Date();

    holidaysForYear.forEach(holiday => {
        if (holiday.name == easterDescription) {
            easterDate = new Date(holiday.date);
        }
    })

    return easterDate;
}

export default getEasterForYear;
import { PassoverAndEaster } from "../helpers/getHolidaysForYear.ts";
import OneOfThreeHolidays, { DateAndHoliday } from "./OneOfThreeHolidays.tsx";

interface Props {
  holidays: PassoverAndEaster;
}

const passoverStart = "Passover End";
const passoverEnd = "Passover End";
const easter = "Easter";

const FeaturedThreeHolidays = ({ holidays }: Props) => {
  const threeHolidays: Array<DateAndHoliday> = getThreeHolidays(holidays);
  return (
    <>
      <OneOfThreeHolidays holiday={threeHolidays[0]} />
      <OneOfThreeHolidays holiday={threeHolidays[1]} />
      <OneOfThreeHolidays holiday={threeHolidays[2]} />
    </>
  );
};

const getThreeHolidays = (holidays: PassoverAndEaster) => {
  const threeHolidays: Array<DateAndHoliday> = [];

  if (holidays.easterDate < holidays.passoverStart) {
    threeHolidays.push({ date: holidays.easterDate, holiday: easter });
    threeHolidays.push({
      date: holidays.passoverStart,
      holiday: passoverStart,
    });
    threeHolidays.push({ date: holidays.passoverEnd, holiday: passoverEnd });
  } else if (holidays.easterDate > holidays.passoverEnd) {
    threeHolidays.push({
      date: holidays.passoverStart,
      holiday: passoverStart,
    });
    threeHolidays.push({ date: holidays.passoverEnd, holiday: passoverEnd });
    threeHolidays.push({ date: holidays.easterDate, holiday: easter });
  } else {
    threeHolidays.push({
      date: holidays.passoverStart,
      holiday: passoverStart,
    });
    threeHolidays.push({ date: holidays.easterDate, holiday: easter });
    threeHolidays.push({ date: holidays.passoverEnd, holiday: passoverEnd });
  }
  return threeHolidays;
};

export default FeaturedThreeHolidays;

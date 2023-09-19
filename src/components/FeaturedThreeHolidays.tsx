import { PassoverAndEaster } from "../helpers/getNextX.ts";

interface DateAndHoliday {
  date: Date;
  holiday: string;
}

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
      <div className="col col-12 col-md-4">
        {threeHolidays[0].date.toDateString()}
        <br />
        <i className="bi bi-arrow-up"></i>
        <br />
        {threeHolidays[0].holiday}
      </div>
      <div className="col col-12 col-md-4">
        {threeHolidays[1].date.toDateString()}
        <br />
        <i className="bi bi-arrow-up"></i>
        <br />
        {threeHolidays[1].holiday}
      </div>
      <div className="col col-12 col-md-4">
        {threeHolidays[2].date.toDateString()}
        <br />
        <i className="bi bi-arrow-up"></i>
        <br />
        {threeHolidays[2].holiday}
      </div>
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

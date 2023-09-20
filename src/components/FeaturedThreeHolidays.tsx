import { PassoverAndEaster } from "../helpers/getHolidaysForYear.ts";
import FeaturedOneHoliday, { DateAndHoliday } from "./FeaturedOneHoliday.tsx";
import { icons } from "../data/enums.ts";

interface Props {
  holidays: PassoverAndEaster;
}

const passoverStart = "Passover Start";
const passoverEnd = "Passover End";
const easter = "Easter";

const FeaturedThreeHolidays = ({ holidays }: Props) => {
  const threeHolidays: Array<DateAndHoliday> = getThreeHolidays(holidays);
  return (
    <>
      <FeaturedOneHoliday holiday={threeHolidays[0]} />
      <FeaturedOneHoliday holiday={threeHolidays[1]} />
      <FeaturedOneHoliday holiday={threeHolidays[2]} />
    </>
  );
};

const getThreeHolidays = (holidays: PassoverAndEaster) => {
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

export default FeaturedThreeHolidays;

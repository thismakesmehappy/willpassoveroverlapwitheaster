import { PassoverAndEasterSunday } from "../../helpers/getHolidaysForYear.ts";
import { getThreeHolidays } from "../../helpers/getThreeHolidays.ts";
import { OneHolidayHorizontal } from "../OneHolidayHorizontal.tsx";

interface Props {
  holidays: PassoverAndEasterSunday;
}

const StandardThreeHolidays = ({ holidays }: Props) => {
  const threeHolidays = getThreeHolidays(holidays);
  return (
    <div className="three-holidays">
      {threeHolidays.map((item) => (
        <OneHolidayHorizontal
          holiday={item}
          short={true}
          key={"oneHoliday" + item.holiday + item.date}
        />
      ))}
    </div>
  );
};

export default StandardThreeHolidays;

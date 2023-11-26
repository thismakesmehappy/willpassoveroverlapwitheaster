import { PassoverAndEasterSunday } from "helpers";
import { getThreeHolidaysInOrder } from "helpers";
import { OneHolidayHorizontal } from "components/commonYears/OneHolidayHorizontal.tsx";

interface Props {
  holidays: PassoverAndEasterSunday;
}

const StandardThreeHolidays = ({ holidays }: Props) => {
  const threeHolidays = getThreeHolidaysInOrder(holidays);
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

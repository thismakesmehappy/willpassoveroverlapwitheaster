import { PassoverAndEasterSunday } from "helpers/getHolidaysForYear.ts";
import { getThreeHolidaysInOrder } from "helpers/getThreeHolidaysInOrder.ts";
import { OneHolidayHorizontal } from "components/OneHolidayHorizontal.tsx";

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

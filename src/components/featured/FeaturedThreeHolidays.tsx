import { PassoverAndEasterSunday } from "helpers/getHolidaysForYear.ts";
import FeaturedOneHoliday from "components/featured/FeaturedOneHoliday.tsx";
import { getThreeHolidaysInOrder } from "helpers/getThreeHolidaysInOrder.ts";

interface Props {
  holidays: PassoverAndEasterSunday;
}

const FeaturedThreeHolidays = ({ holidays }: Props) => {
  const threeHolidays = getThreeHolidaysInOrder(holidays);
  return (
    <div className="row three-holidays m-0">
      {threeHolidays.map((holidays) => (
        <FeaturedOneHoliday
          holiday={holidays}
          key={`featuredThreeHolidays${holidays.holiday}`}
        />
      ))}
    </div>
  );
};

export default FeaturedThreeHolidays;

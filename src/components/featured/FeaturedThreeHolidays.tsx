import { PassoverAndEaster } from "../../helpers/getHolidaysForYear.ts";
import FeaturedOneHoliday from "./FeaturedOneHoliday.tsx";
import { getThreeHolidays } from "../../helpers/getThreeHolidays.ts";

interface Props {
  holidays: PassoverAndEaster;
}

const FeaturedThreeHolidays = ({ holidays }: Props) => {
  const threeHolidays = getThreeHolidays(holidays);
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

import { PassoverAndEasterSunday } from "helpers";
import { FeaturedOneHoliday } from "components";
import { getThreeHolidaysInOrder } from "helpers";

interface Props {
  holidays: PassoverAndEasterSunday;
}

export const FeaturedThreeHolidays = ({ holidays }: Props) => {
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

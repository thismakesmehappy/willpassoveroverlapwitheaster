import { PassoverAndEaster } from "../../helpers/getHolidaysForYear.ts";
import FeaturedOneHoliday from "./FeaturedOneHoliday.tsx";
import { getThreeHolidays } from "../../helpers/getThreeHolidays.ts";

interface Props {
  holidays: PassoverAndEaster;
}

const FeaturedThreeHolidays = ({ holidays }: Props) => {
  const threeHolidays = getThreeHolidays(holidays);
  return (
    <>
      <FeaturedOneHoliday holiday={threeHolidays[0]} />
      <FeaturedOneHoliday holiday={threeHolidays[1]} />
      <FeaturedOneHoliday holiday={threeHolidays[2]} />
    </>
  );
};

export default FeaturedThreeHolidays;

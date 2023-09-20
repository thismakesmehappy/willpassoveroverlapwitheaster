import { PassoverAndEaster } from "../../helpers/getHolidaysForYear.ts";
import { getThreeHolidays } from "../../helpers/getThreeHolidays.ts";
import { OneHolidayHorizonal } from "../OneHolidayHorizonal.tsx";

interface Props {
  holidays: PassoverAndEaster;
}

const StandardThreeHolidays = ({ holidays }: Props) => {
  const threeHolidays = getThreeHolidays(holidays);
  return (
    <>
      {threeHolidays.map((item) => (
        <>
          <OneHolidayHorizonal holiday={item} short={true} />
          <br />
        </>
      ))}
    </>
  );
};

export default StandardThreeHolidays;

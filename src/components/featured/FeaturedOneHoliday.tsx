import OneHolidayVertical from "../OneHolidayVertical.tsx";
import { OneHolidayHorizontal } from "../OneHolidayHorizontal.tsx";
import { DateAndHoliday } from "../../helpers/DateAndHoliday.ts";

interface Props {
  holiday: DateAndHoliday;
}

const FeaturedOneHoliday = ({ holiday }: Props) => {
  return (
    <>
      <OneHolidayVertical
        holiday={holiday}
        short={false}
        className="d-none d-md-block"
      />
      <OneHolidayHorizontal
        holiday={holiday}
        short={false}
        className="d-block d-md-none"
      />
    </>
  );
};

export default FeaturedOneHoliday;

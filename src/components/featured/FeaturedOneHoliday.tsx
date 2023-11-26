import OneHolidayVertical from "components/commonYears/OneHolidayVertical.tsx";
import { OneHolidayHorizontal } from "components/commonYears/OneHolidayHorizontal.tsx";
import { DateAndHoliday } from "helpers";

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
        short={true}
        className="d-block d-md-none"
      />
    </>
  );
};

export default FeaturedOneHoliday;

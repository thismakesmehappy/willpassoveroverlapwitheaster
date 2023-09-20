import OneHolidayVertical from "../OneHolidayVertical.tsx";
import { OneHolidayHorizonal } from "../OneHolidayHorizonal.tsx";
import { DateAndHoliday } from "../../helpers/DateAndHoliday.ts";

interface Props {
  holiday: DateAndHoliday;
}

const FeaturedOneHoliday = ({ holiday }: Props) => {
  return (
    <>
      <div className="col col-12 col-md-4 d-none d-md-block">
        <OneHolidayVertical holiday={holiday} short={false} />
      </div>
      <div className="col col-12 col-md-4 d-block d-md-none">
        <OneHolidayHorizonal holiday={holiday} short={false} />
      </div>
    </>
  );
};

export default FeaturedOneHoliday;

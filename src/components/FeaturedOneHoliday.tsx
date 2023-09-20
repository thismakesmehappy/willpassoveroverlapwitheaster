import { formatDatesLong } from "../helpers/formatDates.ts";
import { icons } from "../data/enums.ts";
import OneHolidayVertical from "./OneHolidayVertical.tsx";
import { OneHolidayHorizonal } from "./OneHolidayHorizonal.tsx";

export interface DateAndHoliday {
  date: Date;
  holiday: string;
  icon: icons | null;
}

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

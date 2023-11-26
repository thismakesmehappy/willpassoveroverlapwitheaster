import { OneHolidayVertical } from "components";
import { OneHolidayHorizontal } from "components";
import { DateAndHoliday } from "helpers";

interface Props {
  holiday: DateAndHoliday;
}

export const FeaturedOneHoliday = ({ holiday }: Props) => {
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

import { StandardYear } from "components";
import { numberOfYears } from "data";
import { getNextX } from "helpers";

interface Props {
  numberOfDays: number;
}

export const StandardList = ({ numberOfDays }: Props) => {
  const listOfHolidays = getNextX(numberOfYears, numberOfDays);
  return (
    <>
      <div className="at-a-glance h2">{numberOfYears} years at a glance</div>
      <div className="row">
        {listOfHolidays.map((holiday, index) => {
          return (
            <div
              className="col col-12 col-md-6 col-lg-4"
              key={"holiday" + holiday.year}
            >
              <StandardYear
                holiday={holiday}
                key={"standardyear" + holiday.year}
                className={"standard-year-" + (index + 1)}
              />
            </div>
          );
        })}
      </div>
    </>
  );
};

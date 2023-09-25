import StandardYear from "./StandardYear.tsx";
import { numberOfYears } from "../../data/constants.ts";
import getNextX from "../../helpers/getNextX.ts";

interface Props {
  numberOfDays: number;
}

const StandardList = ({ numberOfDays }: Props) => {
  const listOfHolidays = getNextX(numberOfYears, numberOfDays);
  return (
    <>
      <div className="at-a-glance h2">{numberOfYears} years at a glance</div>
      <div className="row">
        {listOfHolidays.map((holiday) => {
          return (
            <div
              className="col col-12 col-md-6 col-lg-4 col-xl-3 text-center"
              key={"holiday" + holiday.year}
            >
              <StandardYear
                holiday={holiday}
                key={"standardyear" + holiday.year}
              />
            </div>
          );
        })}
      </div>
    </>
  );
};

export default StandardList;

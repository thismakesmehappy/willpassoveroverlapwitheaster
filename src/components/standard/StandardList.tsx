import StandardYear from "./StandardYear.tsx";
import { numberOfYears } from "../../data/constants.ts";
import getNextX from "../../helpers/getNextX.ts";

const StandardList = () => {
  const listOfHolidays = getNextX(numberOfYears);
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

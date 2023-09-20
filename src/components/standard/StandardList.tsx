import { PassoverAndEaster } from "../../helpers/getHolidaysForYear.ts";
import StandardYear from "./StandardYear.tsx";

interface Props {
  listOfHolidays: PassoverAndEaster[];
}

const StandardList = ({ listOfHolidays }: Props) => {
  return (
    <div className="row">
      {listOfHolidays.map((holiday) => {
        return (
          <div
            className="col col-12 col-md-6 col-lg-4 text-center"
            key={"holiday" + holiday.year}
          >
            <StandardYear holiday={holiday} />
          </div>
        );
      })}
    </div>
  );
};

export default StandardList;

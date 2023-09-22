import PassoverAndEasterOverlap from "../PassoverAndEasterOverlap.tsx";
import StandardThreeHolidays from "./StandardThreeHolidays.tsx";
import { PassoverAndEaster } from "../../helpers/getHolidaysForYear.ts";

interface Props {
  holiday: PassoverAndEaster;
}

export const StandardYear = ({ holiday }: Props) => {
  return (
    <div className="standard-year">
      <div className="header">
        <div className="year">{holiday.year}</div>
      </div>
      <PassoverAndEasterOverlap overlap={holiday.overlap} />
      <StandardThreeHolidays holidays={holiday} />
    </div>
  );
};

export default StandardYear;

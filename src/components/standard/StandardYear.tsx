import PassoverAndEasterOverlap from "../PassoverAndEasterOverlap.tsx";
import StandardThreeHolidays from "./StandardThreeHolidays.tsx";
import { PassoverAndEaster } from "../../helpers/getHolidaysForYear.ts";

interface Props {
  holiday: PassoverAndEaster;
  className?: string;
}

export const StandardYear = ({ holiday, className }: Props) => {
  const classes = "text-center standard-year " + className;
  return (
    <div className={classes}>
      <div className="header">
        <div className="year">{holiday.year}</div>
      </div>
      <PassoverAndEasterOverlap overlap={holiday.overlap} />
      <StandardThreeHolidays holidays={holiday} />
    </div>
  );
};

export default StandardYear;

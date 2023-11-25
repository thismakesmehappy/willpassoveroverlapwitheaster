import PassoverAndEasterSundayOverlap from "components/PassoverAndEasterSundayOverlap.tsx";
import StandardThreeHolidays from "components/standard/StandardThreeHolidays.tsx";
import { PassoverAndEasterSunday } from "helpers/getHolidaysForYear.ts";

interface Props {
  holiday: PassoverAndEasterSunday;
  className?: string;
}

export const StandardYear = ({ holiday, className }: Props) => {
  const classes = "text-center standard-year " + className;
  return (
    <div className={classes}>
      <div className="header">
        <div className="year">{holiday.year}</div>
      </div>
      <PassoverAndEasterSundayOverlap overlap={holiday.overlap} />
      <StandardThreeHolidays holidays={holiday} />
    </div>
  );
};

export default StandardYear;

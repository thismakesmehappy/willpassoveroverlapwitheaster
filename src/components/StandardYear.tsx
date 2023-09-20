import PassoverAndEasterOverlap from "./PassoverAndEasterOverlap.tsx";
import StandardThreeHolidays from "./StandardThreeHolidays.tsx";
import { PassoverAndEaster } from "../helpers/getHolidaysForYear.ts";

interface Props {
  holiday: PassoverAndEaster;
}

export const StandardYear = ({ holiday }: Props) => {
  return (
    <>
      <div>{holiday.year}</div>

      <PassoverAndEasterOverlap overlap={holiday.overlap} />
      <StandardThreeHolidays holidays={holiday} />
    </>
  );
};

export default StandardYear;

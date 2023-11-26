import { getHolidaysForYear } from "helpers";
import { FeaturedThreeHolidays } from "components";
import { FeaturedYearHeader } from "components";
import { PassoverAndEasterSundayOverlap } from "components";
import { getYearForNextHolidays } from "helpers";
import { useState } from "react";
import { SevenOrEightDays } from "components";

export interface Props {
  numberOfDays: number;
  setNumberOfDays: (days: number) => void;
}

export const FeaturedYear = ({ numberOfDays, setNumberOfDays }: Props) => {
  const year = getYearForNextHolidays(numberOfDays);
  const [yearOffset, setYearOffset] = useState(0);
  const holidays = getHolidaysForYear(year + yearOffset, numberOfDays);

  const increaseYear = () => {
    setYearOffset(yearOffset + 1);
  };
  const decreaseYear = () => {
    setYearOffset(yearOffset - 1);
  };
  const resetYear = () => {
    setYearOffset(0);
  };
  return (
    <div className="p-5 row align-items-center text-center col col-12 col-lg-7 col-xl-6 m-auto featured-year">
      <FeaturedYearHeader
        year={holidays.year}
        decreaseYear={decreaseYear}
        increaseYear={increaseYear}
        resetYear={resetYear}
      />

      <PassoverAndEasterSundayOverlap overlap={holidays.overlap} />
      <SevenOrEightDays
        numberOfDays={numberOfDays}
        setNumberOfDays={setNumberOfDays}
      />
      <FeaturedThreeHolidays holidays={holidays} />
    </div>
  );
};

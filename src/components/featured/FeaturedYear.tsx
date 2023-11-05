import getHolidaysForYear from "../../helpers/getHolidaysForYear.ts";
import FeaturedThreeHolidays from "./FeaturedThreeHolidays.tsx";
import FeaturedYearHeader from "./FeaturedYearHeader.tsx";
import PassoverAndEasterSundayOverlap from "../PassoverAndEasterSundayOverlap.tsx";
import getYearForNextHolidays from "../../helpers/getYearForNextHolidays.ts";
import { useState } from "react";
import { SevenOrEightDays } from "../SevenOrEightDays.tsx";

interface Props {
  numberOfDays: number;
  setNumberOfDays: (days: number) => void;
}

const FeaturedYear = ({ numberOfDays, setNumberOfDays }: Props) => {
  const today: Date = new Date();
  const year = getYearForNextHolidays(numberOfDays);
  const [yearOffset, setYearOffset] = useState(0);
  const holidays = getHolidaysForYear(year + yearOffset, numberOfDays);
  const isNext = yearOffset == 0;
  const passed: boolean = isNext && today.getFullYear() < holidays.year;

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
        passed={passed}
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

export default FeaturedYear;

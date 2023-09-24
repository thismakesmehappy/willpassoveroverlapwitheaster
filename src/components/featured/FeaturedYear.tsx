import { PassoverAndEaster } from "../../helpers/getHolidaysForYear.ts";
import FeaturedThreeHolidays from "./FeaturedThreeHolidays.tsx";
import FeaturedYearHeader from "./FeaturedYearHeader.tsx";
import PassoverAndEasterOverlap from "../PassoverAndEasterOverlap.tsx";

interface Props {
  holidays: PassoverAndEaster;
  isNext: boolean;
  decreaseYear: () => void;
  increaseYear: () => void;
}

const FeaturedYear = ({
  holidays,
  isNext,
  decreaseYear,
  increaseYear,
}: Props) => {
  const today: Date = new Date();
  const passed: boolean = isNext && today.getFullYear() < holidays.year;

  return (
    <div className="p-5 row align-items-center text-center col col-12 col-md-10 col-lg-7 col-xl-6 m-auto featured-year">
      <FeaturedYearHeader
        passed={passed}
        year={holidays.year}
        decreaseYear={decreaseYear}
        increaseYear={increaseYear}
      />

      <PassoverAndEasterOverlap overlap={holidays.overlap} />
      <FeaturedThreeHolidays holidays={holidays} />
    </div>
  );
};

export default FeaturedYear;

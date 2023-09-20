import { PassoverAndEaster } from "../helpers/getHolidaysForYear.ts";
import FeaturedThreeHolidays from "./FeaturedThreeHolidays.tsx";
import FeaturedYearHeader from "./FeaturedYearHeader.tsx";
import FeaturedPassoverAndEasterOverlap from "./FeaturedPassoverAndEasterOverlap.tsx";

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
    <div className="p-5 row align-items-center text-center">
      <FeaturedYearHeader
        passed={passed}
        year={holidays.year}
        decreaseYear={decreaseYear}
        increaseYear={increaseYear}
      />

      <FeaturedThreeHolidays holidays={holidays} />

      <div className="text-center col-12 h1 p-4">
        <FeaturedPassoverAndEasterOverlap overlap={holidays.overlap} />
      </div>
    </div>
  );
};

export default FeaturedYear;

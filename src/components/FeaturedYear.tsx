import { PassoverAndEaster } from "../helpers/getNextX.ts";
import FeaturedThreeHolidays from "./FeaturedThreeHolidays.tsx";
import FeaturedYearHeader from "./FeaturedYearHeader.tsx";
import FeaturedPassoverAndEasterOverlap from "./FraturedPassoverAndEasterOverlap.tsx";

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

      <FeaturedPassoverAndEasterOverlap
        year={holidays.year}
        overlap={holidays.overlap}
      />
    </div>
  );
};

export default FeaturedYear;
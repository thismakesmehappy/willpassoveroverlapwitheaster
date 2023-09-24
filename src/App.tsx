import "./css/style.css";

import getNextX from "./helpers/getNextX.ts";
import FeaturedYear from "./components/featured/FeaturedYear.tsx";
import StandardList from "./components/standard/StandardList.tsx";
import { useState } from "react";
import { numberOfYears } from "./data/constants.ts";
import getHolidaysForYear from "./helpers/getHolidaysForYear.ts";
import getYearForNextHolidays from "./helpers/getYearForNextHolidays.ts";

function App() {
  const [yearOffset, setYearOffset] = useState(0);
  const nextX = getNextX(numberOfYears);
  const year = getYearForNextHolidays();
  const increaseYear = () => {
    setYearOffset(yearOffset + 1);
  };

  const decreaseYear = () => {
    setYearOffset(yearOffset - 1);
  };

  return (
    <div className="container-responsive">
      <FeaturedYear
        holidays={getHolidaysForYear(year + yearOffset)}
        isNext={yearOffset == 0}
        increaseYear={increaseYear}
        decreaseYear={decreaseYear}
      />
      <hr />
      <StandardList listOfHolidays={nextX} />
    </div>
  );
}

export default App;

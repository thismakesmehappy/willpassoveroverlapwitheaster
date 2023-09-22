import "./css/style.css";

import getNextX from "./helpers/getNextX.ts";
import FeaturedYear from "./components/featured/FeaturedYear.tsx";
import StandardList from "./components/standard/StandardList.tsx";
import { useState } from "react";
import { numberOfYears } from "./data/constants.ts";

function App() {
  const [yearOffset, setYearOffset] = useState(0);
  const nextX = getNextX(numberOfYears);

  const increaseYear = () => {
    if (yearOffset < numberOfYears - 1) {
      setYearOffset(yearOffset + 1);
    }
  };

  const decreaseYear = () => {
    if (yearOffset > 0) {
      setYearOffset(yearOffset - 1);
    }
  };

  return (
    <div className="container-responsive">
      <FeaturedYear
        holidays={nextX[yearOffset]}
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

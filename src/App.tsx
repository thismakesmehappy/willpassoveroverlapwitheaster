import "./css/style.css";
import "bootstrap-icons/font/bootstrap-icons.css";

import getNextX from "./helpers/getNextX.ts";
import FeaturedYear from "./components/FeaturedYear.tsx";
import DisplayList from "./components/DisplayList.tsx";
import { useState } from "react";

const numberOfYears = 10;

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
    <>
      <FeaturedYear
        holidays={nextX[yearOffset]}
        isNext={yearOffset == 0}
        increaseYear={increaseYear}
        decreaseYear={decreaseYear}
      />
      <hr />
      <DisplayList listOfHolidays={nextX} />
    </>
  );
}

export default App;

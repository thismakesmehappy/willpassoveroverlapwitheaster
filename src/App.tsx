import "./css/style.css";
import "bootstrap-icons/font/bootstrap-icons.css";

import getNextX from "./helpers/getNextX.ts";
import DisplayFeatured from "./components/DisplayFeatured.tsx";
import DisplayList from "./components/DisplayList.tsx";

const numberOfYears = 10;

function App() {
  const nextX = getNextX(numberOfYears);

  return (
    <>
      <DisplayFeatured holidays={nextX[0]} />
      <hr />
      <DisplayList listOfHolidays={nextX} />
    </>
  );
}

export default App;

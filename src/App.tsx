import "./css/style.css";

import getNextX from "./helpers/getNextX.ts";
import FeaturedYear from "./components/featured/FeaturedYear.tsx";
import StandardList from "./components/standard/StandardList.tsx";
import { numberOfYears } from "./data/constants.ts";

function App() {
  const nextX = getNextX(numberOfYears);

  return (
    <div className="container-responsive">
      <FeaturedYear />
      <hr />
      <StandardList listOfHolidays={nextX} />
    </div>
  );
}

export default App;

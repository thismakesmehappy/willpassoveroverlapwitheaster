import "./css/style.css";

import FeaturedYear from "./components/featured/FeaturedYear.tsx";
import StandardList from "./components/standard/StandardList.tsx";
import { useState } from "react";
import About from "./components/About.tsx";
import { holiday1, holiday2 } from "./data/constants.ts";

function App() {
  const [numberOfDays, setNumberOfDays] = useState(8);
  return (
    <div className="container-md p-2 p-md-4 p-lg-5" role="main">
      <h1 className="my-2 mt-sm-0">
        Will {holiday1} And {holiday2} Overlap?
      </h1>
      <FeaturedYear
        numberOfDays={numberOfDays}
        setNumberOfDays={setNumberOfDays}
      />
      <About />
      <hr className="my-4" />
      <StandardList numberOfDays={numberOfDays} />
    </div>
  );
}

export default App;

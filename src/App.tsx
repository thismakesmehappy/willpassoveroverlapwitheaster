import "./css/style.css";

import FeaturedYear from "./components/featured/FeaturedYear.tsx";
import StandardList from "./components/standard/StandardList.tsx";
import { useState } from "react";
import About from "./components/About.tsx";

function App() {
  const [numberOfDays, setNumberOfDays] = useState(8);
  return (
    <div className="container-responsive p-2 p-md-4 p-lg-5">
      <FeaturedYear
        numberOfDays={numberOfDays}
        setNumberOfDays={setNumberOfDays}
      />
      <About />
      <hr />
      <StandardList numberOfDays={numberOfDays} />
    </div>
  );
}

export default App;

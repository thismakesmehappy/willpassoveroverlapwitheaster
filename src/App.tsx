import "./css/style.css";

import FeaturedYear from "./components/featured/FeaturedYear.tsx";
import StandardList from "./components/standard/StandardList.tsx";
import { useState } from "react";

function App() {
  const [numberOfDays, setNumberOfDays] = useState(8);
  return (
    <div className="container-responsive">
      <FeaturedYear
        numberOfDays={numberOfDays}
        setNumberOfDays={setNumberOfDays}
      />
      <hr />
      <StandardList numberOfDays={numberOfDays} />
    </div>
  );
}

export default App;

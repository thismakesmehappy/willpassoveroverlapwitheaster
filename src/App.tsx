import "./css/style.css";

import FeaturedYear from "./components/featured/FeaturedYear.tsx";
import StandardList from "./components/standard/StandardList.tsx";

function App() {
  return (
    <div className="container-responsive">
      <FeaturedYear />
      <hr />
      <StandardList />
    </div>
  );
}

export default App;

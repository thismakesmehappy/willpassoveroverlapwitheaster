import getPassoverForYear from "./helpers/getPassoverForYear.ts";

import "./css/style.css";
import getEasterForYear from "./helpers/getEasterForYear.ts";
import getDoEasterAndPassoverOverlap from "./helpers/getDoEasterAndPassoverOverlap.ts";

const today: Date = new Date();
const year = today.getFullYear() + 1;

function App() {
  const passoverDates = getPassoverForYear(year);
  console.log(passoverDates);

  const easter = getEasterForYear(year);

  const overlap = getDoEasterAndPassoverOverlap(passoverDates, easter);

  return (
    <>
      <div className="p-5 row align-items-center h3">
        <div className="col col-6 text-center align-middle">
          Passover {year} <br />
          falls between
          <br />
          {passoverDates.start.toDateString()} <br />
          and
          <br />
          {passoverDates.end.toDateString()}
        </div>
        <div className="col col-6 text-center align-middle">
          Easter {year} <br />
          falls on
          <br /> {easter.toDateString()}
        </div>
        <div className={"text-center col-12 h1 p-4"}>
          In {year}, Passover and Easter do {!overlap && "not"} overlap
        </div>
      </div>
    </>
  );
}

export default App;

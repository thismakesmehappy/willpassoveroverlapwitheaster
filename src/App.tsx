import getPassoverForYear from "./helpers/getPassoverForYear.ts";

import "./css/style.css";
import getEasterForYear from "./helpers/getEasterForYear.ts";
import getDoEasterAndPassoverOverlap from "./helpers/getDoEasterAndPassoverOverlap.ts";
import getNextX from "./helpers/getNextX.ts";

const today: Date = new Date();
const year = today.getFullYear() + 1;

function App() {
  const passoverDates = getPassoverForYear(year);
  console.log(passoverDates);

  const easter = getEasterForYear(year);

  const overlap = getDoEasterAndPassoverOverlap(passoverDates, easter);

  const numberOfYears = 10;
  const nextX = getNextX(numberOfYears);
  console.log(nextX);

  const head = nextX[0];
  const tail = nextX.slice(1);

  console.log("Head " + head);
  console.log("Tail " + tail);

  return (
    <>
      <div className="p-5 row align-items-center h3">
        <div className="col col-6 text-center align-middle">
          Passover {head.year} <br />
          falls between
          <br />
          {head.passoverStart.toDateString()} <br />
          and
          <br />
          {head.passoverEnd.toDateString()}
        </div>
        <div className="col col-6 text-center align-middle">
          Easter {head.year} <br />
          falls on
          <br /> {head.easterDate.toDateString()}
        </div>
        <div className={"text-center col-12 h1 p-4"}>
          In {head.year}, Passover and Easter do {!head.overlap && "not"}{" "}
          overlap
        </div>
      </div>
      <hr />
      {console.log(tail)}
      <div className="row">
        {tail.map((item) => {
          const year = item.year;
          const passoverStart = item.passoverStart.toDateString();
          const passoverEnd = item.passoverEnd.toDateString();
          const easterDate = item.easterDate.toDateString();
          const overlap = item.overlap;
          return (
            <div className="text-center">
              In {year}, Easter and Passover do {!overlap && "not"} overlap
              <br />
              Passover start: {passoverStart}
              <br />
              Passover end: {passoverEnd} <br />
              Easter: {easterDate}
              <br />
              ---
            </div>
          );
        })}
      </div>
    </>
  );
}

export default App;

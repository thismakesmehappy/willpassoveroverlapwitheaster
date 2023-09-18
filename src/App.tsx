import "./css/style.css";
import "bootstrap-icons/font/bootstrap-icons.css";

import getNextX from "./helpers/getNextX.ts";

const numberOfYears = 10;

function App() {
  const nextX = getNextX(numberOfYears);

  const head = nextX[0];
  const tail = nextX.slice(1);

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
      <div className="row">
        {tail.map((item) => {
          const year = item.year;
          const passoverStart = item.passoverStart.toDateString();
          const passoverEnd = item.passoverEnd.toDateString();
          const easterDate = item.easterDate.toDateString();
          const overlap = item.overlap;
          return (
            <div className="col col-12 col-md-6 col-lg-4 text-center">
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

import "./css/style.css";
import "bootstrap-icons/font/bootstrap-icons.css";

import getNextX from "./helpers/getNextX.ts";
import DisplayFeatured from "./components/DisplayFeatured.tsx";

const numberOfYears = 10;

function App() {
  const nextX = getNextX(numberOfYears);

  const head = nextX[0];
  const tail = nextX.slice(1);

  return (
    <>
      <DisplayFeatured holidays={head} />
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

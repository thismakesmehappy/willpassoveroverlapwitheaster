import getPassoverForYear from "./helpers/getPassoverForYear.ts"

import './App.css';
import getEasterForYear from "./helpers/getEasterForYear.ts";
import getDoEasterAndPassoverOverlap from "./helpers/getDoEasterAndPassoverOverlap.ts";

const today: Date = new Date;
const year = today.getFullYear() + 1;

function App() {

const passoverDates = getPassoverForYear(year);
console.log(passoverDates);

const easter = getEasterForYear(year);

const overlap = getDoEasterAndPassoverOverlap(passoverDates, easter);

  return (
    <>
        <div>
      <p>Passover {today.getFullYear()} falls between {passoverDates.start.toDateString()} and {passoverDates.end.toDateString()}</p>
        <p>Easter {today.getFullYear()} falls on {easter.toDateString()}</p>
        </div>
        <div>
            In {today.getFullYear()}, Passover and Easter do {!overlap && "not"} overlap
        </div>
    </>
  )
}

export default App

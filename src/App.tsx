import getPassoverForYear from "./helpers/getPassoverForYear.ts"

import './App.css';
import getEasterForYear from "./helpers/getEasterForYear.ts";

function App() {
  const today: Date = new Date;

const passoverDates = getPassoverForYear(today.getFullYear());
console.log(passoverDates);

const easter = getEasterForYear(today.getFullYear());

  return (
    <>
        <div>
      <p>Passover {today.getFullYear()} falls between {passoverDates.start.toDateString()} and {passoverDates.end.toDateString()}</p>
        <p>Easter {today.getFullYear()} falls on {easter.toDateString()}</p>
        </div>
    </>
  )
}

export default App

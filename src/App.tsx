import getNextPassover from "./helpers/getNextPassover.ts"

import './App.css';

function App() {
const dates = getNextPassover();
console.log(dates);

  return (
    <>
    </>
  )
}

export default App

import { PassoverAndEaster } from "../helpers/getNextX.ts";

interface Props {
  listOfHolidays: PassoverAndEaster[];
}

const DisplayList = ({ listOfHolidays }: Props) => {
  return (
    <div className="row">
      {listOfHolidays.map((item) => {
        const year = item.year;
        const passoverStart = item.passoverStart.toDateString();
        const passoverEnd = item.passoverEnd.toDateString();
        const easterDate = item.easterDate.toDateString();
        const overlap = item.overlap;
        return (
          <div
            className="col col-12 col-md-6 col-lg-4 text-center"
            key={"holiday" + year}
          >
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
  );
};

export default DisplayList;

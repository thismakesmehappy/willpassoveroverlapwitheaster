import { PassoverAndEaster } from "../helpers/getNextX.ts";

interface Props {
  holidays: PassoverAndEaster;
}

const DisplayFeatured = ({ holidays }: Props) => {
  return (
    <div className="p-5 row align-items-center h3">
      <div className="col col-6 text-center align-middle">
        Passover {holidays.year} <br />
        falls between
        <br />
        {holidays.passoverStart.toDateString()} <br />
        and
        <br />
        {holidays.passoverEnd.toDateString()}
      </div>
      <div className="col col-6 text-center align-middle">
        Easter {holidays.year} <br />
        falls on
        <br /> {holidays.easterDate.toDateString()}
      </div>
      <div className={"text-center col-12 h1 p-4"}>
        In {holidays.year}, Passover and Easter do {!holidays.overlap && "not"}{" "}
        overlap
      </div>
    </div>
  );
};

export default DisplayFeatured;

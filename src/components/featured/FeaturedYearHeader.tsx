import { ReactNode } from "react";

interface Props {
  year: number;
  decreaseYear: () => void;
  increaseYear: () => void;
  resetYear: () => void;
}

const FeaturedYearHeader = ({
  year,
  decreaseYear,
  increaseYear,
  resetYear,
}: Props) => {
  const conditionalPipe: ReactNode = (
    <>
      <span className="d-none d-sm-inline">|</span>
      <div className="d-block d-sm-none my-2"></div>
    </>
  );
  return (
    <div className="col col-12 header">
      <div className="year">{year}</div>
      <div className="change-years">
        <button
          onClick={decreaseYear}
          className={"btn btn-link change-year last-year"}
        >
          {"<<"} Previous
        </button>
        {conditionalPipe}
        <button
          onClick={resetYear}
          className={"btn btn-link change-year next-year"}
        >
          Upcoming Holidays
        </button>
        {conditionalPipe}
        <button
          onClick={increaseYear}
          className={"btn btn-link change-year next-year"}
        >
          Following {">>"}
        </button>
      </div>
    </div>
  );
};

export default FeaturedYearHeader;

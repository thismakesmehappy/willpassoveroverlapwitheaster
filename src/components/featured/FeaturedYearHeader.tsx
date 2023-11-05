import { holiday1, holiday2 } from "../../data/constants.ts";

interface Props {
  passed: boolean;
  year: number;
  decreaseYear: () => void;
  increaseYear: () => void;
  resetYear: () => void;
}

const FeaturedYearHeader = ({
  passed,
  year,
  decreaseYear,
  increaseYear,
  resetYear,
}: Props) => {
  return (
    <div className="col col-12 header">
      <p className="has-passed">
        {passed ? (
          <>
            {holiday1} and {holiday2} already passed in {year - 1}
            <br />
            Showing you the holidays for next year
          </>
        ) : (
          <>
            &nbsp;
            <br />
            &nbsp;
          </>
        )}
      </p>
      <div className="year">{year}</div>
      <div className="change-years">
        <button
          onClick={decreaseYear}
          className={"btn btn-link change-year last-year"}
        >
          {"<<"} Previous Year
        </button>
        |
        <button
          onClick={resetYear}
          className={"btn btn-link change-year next-year"}
        >
          This Year
        </button>
        |
        <button
          onClick={increaseYear}
          className={"btn btn-link change-year next-year"}
        >
          Following Year {">>"}
        </button>
      </div>
    </div>
  );
};

export default FeaturedYearHeader;

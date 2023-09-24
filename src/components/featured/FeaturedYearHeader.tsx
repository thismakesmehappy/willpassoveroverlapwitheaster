interface Props {
  passed: boolean;
  year: number;
  decreaseYear: () => void;
  increaseYear: () => void;
}

const FeaturedYearHeader = ({
  passed,
  year,
  decreaseYear,
  increaseYear,
}: Props) => {
  return (
    <div className="col col-12 header">
      <p className="has-passed">
        {passed ? (
          `Passover and Easter already passed in ${year - 1}`
        ) : (
          <>&nbsp;</>
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
          onClick={increaseYear}
          className={"btn btn-link change-year next-year"}
        >
          Next Year {">>"}
        </button>
      </div>
    </div>
  );
};

export default FeaturedYearHeader;

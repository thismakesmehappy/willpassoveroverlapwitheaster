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
    <div className="col col-12 bg-info bg-gradient">
      {passed && <div>Passover and Easter already passed this year</div>}
      <div className="h1">
        <button onClick={decreaseYear} className={"btn btn-link"}>
          -
        </button>
        {year}
        <button onClick={increaseYear} className={"btn btn-link"}>
          +
        </button>
      </div>
    </div>
  );
};

export default FeaturedYearHeader;

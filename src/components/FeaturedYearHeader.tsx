interface Props {
  passed: boolean;
  year: number;
}

const FeaturedYearHeader = ({ passed, year }: Props) => {
  return (
    <div className="col col-12 bg-info bg-gradient">
      {passed && <div>Passover and Easter already passed this year</div>}
      <div className="h1">{year}</div>
    </div>
  );
};

export default FeaturedYearHeader;

import "bootstrap-icons/font/bootstrap-icons.css";
import Props from "./featured/FeaturedYear.tsx";

interface Props {
  numberOfDays: number;
  setNumberOfDays: (days: number) => void;
}

export const SevenOrEightDays = ({ numberOfDays, setNumberOfDays }: Props) => {
  return (
    <div className="select-days">
      I celebrate:&nbsp;
      <button className="btn btn-link" onClick={() => setNumberOfDays(7)}>
        {numberOfDays === 7 ? (
          <i className="bi bi-record-circle" />
        ) : (
          <i className="bi bi-circle" />
        )}
        &nbsp;7
      </button>
      <button className="btn btn-link" onClick={() => setNumberOfDays(8)}>
        {numberOfDays === 8 ? (
          <i className="bi bi-record-circle" />
        ) : (
          <i className="bi bi-circle" />
        )}
        &nbsp;8
      </button>
      days
    </div>
  );
};

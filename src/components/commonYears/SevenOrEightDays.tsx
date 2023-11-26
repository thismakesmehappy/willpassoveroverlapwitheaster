import "bootstrap-icons/font/bootstrap-icons.css";
import { Expandable } from "components";

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
        )}{" "}
        7
      </button>
      <button className="btn btn-link" onClick={() => setNumberOfDays(8)}>
        {numberOfDays === 8 ? (
          <i className="bi bi-record-circle" />
        ) : (
          <i className="bi bi-circle" />
        )}{" "}
        8
      </button>
      days
      <Expandable id="what-is-this" title="What is this?">
        Originally, Passover lasted 7 days. Because the news of upcoming
        holidays spread slower outside of Israel, the sages decided to extend
        the holiday to 8 days in the diaspora. Today, Jews in Israel celebrate 7
        days while most Jews outside of Israel observe 8 days. Some consider
        this practice to be archaic and observe 7 days even outside of Israel.
      </Expandable>
    </div>
  );
};

import "bootstrap-icons/font/bootstrap-icons.css";
import Props from "./featured/FeaturedYear.tsx";
import Expandable from "./expandable/Expandable.tsx";

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
        Outside of Israel, we add an additional day to most Jewish holidays.
        This is because historically, news of a holiday traveled slow and we
        weren't always sure we got the exact dates. In Israel, Passover is
        observed for seven days. Outside of Israel, Passover is observed for
        eight days, although many Jews outside of Israel consider this archaic
        and celebrate only seven days.
      </Expandable>
    </div>
  );
};

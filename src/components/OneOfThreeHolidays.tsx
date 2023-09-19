import { formatDatesLong } from "../helpers/formatDates.ts";

export interface DateAndHoliday {
  date: Date;
  holiday: string;
}

interface Props {
  holiday: DateAndHoliday;
}

const OneOfThreeHolidays = ({ holiday }: Props) => {
  return (
    <>
      <div className="col col-12 col-md-4 d-none d-md-block">
        {formatDatesLong(holiday.date)}
        <br />
        <i className="bi bi-arrow-up"></i>
        <br />
        {holiday.holiday}
      </div>
      <div className="col col-12 col-md-4 d-block d-md-none">
        {holiday.holiday} <i className="bi bi-arrow-right"></i>{" "}
        {formatDatesLong(holiday.date)}
      </div>
    </>
  );
};

export default OneOfThreeHolidays;

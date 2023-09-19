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
      <div className="col col-12 col-md-4">
        {formatDatesLong(holiday.date)}
        <br />
        <i className="bi bi-arrow-up"></i>
        <br />
        {holiday.holiday}
      </div>
    </>
  );
};

export default OneOfThreeHolidays;

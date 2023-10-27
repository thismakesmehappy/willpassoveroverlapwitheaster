import { DateAndHoliday } from "../../../src/helpers/DateAndHoliday";
import { icons } from "../../../src/data/enums.ts";

test("Test Interface for DateAndHoliday with icon", () => {
  const date = new Date(Date.now());
  const holiday = "Passover";
  const icon = icons.start;
  const dateAndHoliday: DateAndHoliday = {
    date: date,
    holiday: holiday,
    icon: icon,
  };
  expect(dateAndHoliday.date).toEqual(date);
  expect(dateAndHoliday.holiday).toEqual(holiday);
  expect(dateAndHoliday.icon).toEqual(icon);
});

test("Test Interface for DateAndHoliday without icon", () => {
  const date = new Date(Date.now());
  const holiday: string = "Passover";
  const dateAndHoliday: DateAndHoliday = {
    date: date,
    holiday: holiday,
    icon: null,
  };
  expect(dateAndHoliday.date).toEqual(date);
  expect(dateAndHoliday.holiday).toEqual(holiday);
  expect(dateAndHoliday.icon).toEqual(null);
});

import { DateAndHoliday } from "../../../src/helpers/DateAndHoliday";
import { icons } from "../../../src/data/enums.ts";
import { holiday1 } from "../../../src/data/constants";

test("Test Interface for DateAndHoliday with icon", () => {
  const date = new Date(Date.now());
  const holiday = holiday1;
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
  const holiday: string = holiday1;
  const dateAndHoliday: DateAndHoliday = {
    date: date,
    holiday: holiday,
    icon: null,
  };
  expect(dateAndHoliday.date).toEqual(date);
  expect(dateAndHoliday.holiday).toEqual(holiday);
  expect(dateAndHoliday.icon).toEqual(null);
});

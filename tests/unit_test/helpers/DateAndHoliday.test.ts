import { DateAndHoliday } from "helpers";
import { icons } from "data";
import { holiday1 } from "data";

test("Test Interface for DateAndHoliday with icon", () => {
  // Given
  const date = new Date(Date.now());
  const holiday = holiday1;
  const icon = icons.start;
  const dateAndHoliday: DateAndHoliday = {
    date: date,
    holiday: holiday,
    icon: icon,
  };

  // When
  // Then
  expect(dateAndHoliday.date).toEqual(date);
  expect(dateAndHoliday.holiday).toEqual(holiday);
  expect(dateAndHoliday.icon).toEqual(icon);
});

test("Test Interface for DateAndHoliday without icon", () => {
  // Given
  const date = new Date(Date.now());
  const holiday: string = holiday1;
  const dateAndHoliday: DateAndHoliday = {
    date: date,
    holiday: holiday,
    icon: null,
  };

  // When
  // Then
  expect(dateAndHoliday.date).toEqual(date);
  expect(dateAndHoliday.holiday).toEqual(holiday);
  expect(dateAndHoliday.icon).toEqual(null);
});

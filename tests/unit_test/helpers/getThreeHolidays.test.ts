import {
  easterSunday,
  passoverEnd,
  passoverStart,
  getThreeHolidaysInOrder,
} from "helpers/getThreeHolidaysInOrder";

import { icons as iconsList } from "data/enums";
import { compareDates } from "./testHelpers";

// these are not real holiday dates, we just care that the relationship of the holidays matches
test.each([
  {
    passoverStartDate: new Date("April 22, 2024"),
    passoverEndDate: new Date("April 29, 2024"),
    easterSundayDate: new Date("March 31, 2024"),
    expectedOrder: [easterSunday, passoverStart, passoverEnd],
    message: "Easter falls before Passover",
    overlap: false,
    year: 2024,
  },
  {
    passoverStartDate: new Date("April 10, 2024"),
    passoverEndDate: new Date("April 20, 2024"),
    easterSundayDate: new Date("April 10, 2024"),
    expectedOrder: [passoverStart, easterSunday, passoverEnd],
    message: "Easter falls on the first day of Passover",
    overlap: true,
    year: 2024,
  },
  {
    passoverStartDate: new Date("April 10, 2024"),
    passoverEndDate: new Date("April 20, 2024"),
    easterSundayDate: new Date("April 15, 2024"),
    expectedOrder: [passoverStart, easterSunday, passoverEnd],
    message: "Easter falls in the middle of Passover",
    overlap: true,
    year: 2024,
  },
  {
    passoverStartDate: new Date("April 10, 2024"),
    passoverEndDate: new Date("April 20, 2024"),
    easterSundayDate: new Date("April 20, 2024"),
    expectedOrder: [passoverStart, easterSunday, passoverEnd],
    message: "Easter falls on the last day of Passover",
    overlap: true,
    year: 2024,
  },
  {
    passoverStartDate: new Date("April 22, 2024"),
    passoverEndDate: new Date("April 29, 2024"),
    easterSundayDate: new Date("May 1, 2024"),
    expectedOrder: [passoverStart, passoverEnd, easterSunday],
    message: "Easter falls after Passover",
    overlap: false,
    year: 2024,
  },
])(
  "Get Three Holidays in Order: $expectedOrder; $message",
  ({
    passoverStartDate,
    passoverEndDate,
    easterSundayDate,
    expectedOrder,
    overlap,
    year,
  }) => {
    // Given  --> setup in parameterized args

    // Creating dictionaries so we only have to pass one array to test the
    // expected order; the array elements are the keys
    const dates = {
      [passoverStart]: passoverStartDate,
      [passoverEnd]: passoverEndDate,
      [easterSunday]: easterSundayDate,
    };

    const icons = {
      [passoverStart]: iconsList.start,
      [passoverEnd]: iconsList.end,
      [easterSunday]: iconsList.whole,
    };

    // When
    const obtained = getThreeHolidaysInOrder({
      passoverStart: passoverStartDate,
      passoverEnd: passoverEndDate,
      easterSundayDate: easterSundayDate,
      overlap: overlap,
      year: year,
    });

    // Then
    obtained.forEach((holiday, index) => {
      const expectedHoliday = expectedOrder[index];
      expect(holiday.holiday).toEqual(expectedHoliday);
      expect(compareDates(holiday.date, dates[expectedHoliday])).toBeTruthy();
      expect(holiday.icon).toEqual(icons[expectedHoliday]);
    });
  },
);

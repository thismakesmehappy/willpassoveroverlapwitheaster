import {
  formatDatesLong,
  formatDatesShort,
} from "../../../src/helpers/formatDates.ts";
import { daysShort, monthsShort } from "../../../src/data/enums.ts";

test("Format Dates Long", () => {
  const date = new Date("January 17, 1984 03:24:00");
  const expected = "Tuesday, January 17";
  const obtained = formatDatesLong(date);
  expect(obtained).toEqual(expected);
});

test("Format Dates Short", () => {
  const date = new Date("January 17, 1984 03:24:00");
  const expected = `${daysShort[2]}, ${monthsShort[0]} 17`;
  const obtained = formatDatesShort(date);
  expect(obtained).toEqual(expected);
});

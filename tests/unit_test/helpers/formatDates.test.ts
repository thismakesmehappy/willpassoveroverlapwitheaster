import {
  formatDatesLong,
  formatDatesShort,
} from "../../../src/helpers/formatDates.ts";
import { daysShort, monthsShort } from "../../../src/data/enums.ts";

test("Format Dates Long", () => {
  // Given
  const date = new Date("January 17, 1984 03:24:00");
  const expected = "Tuesday, January 17";

  // When
  const obtained = formatDatesLong(date);

  // Then
  expect(obtained).toEqual(expected);
});

test("Format Dates Short", () => {
  // Given
  const date = new Date("January 17, 1984 03:24:00");
  const expected = `${daysShort[2]}, ${monthsShort[0]} 17`;

  // When
  const obtained = formatDatesShort(date);

  // Then
  expect(obtained).toEqual(expected);
});

import getPassoverForYear from "../../../src/helpers/getPassoverForYear";
import { compareDates } from "./testHelpers";

test.each([
  {
    year: 2023,
    numberOfDays: 7,
    start: new Date("April 5, 2023"),
    end: new Date("April 12, 2023"),
  },
  {
    year: 2023,
    numberOfDays: 8,
    start: new Date("April 5, 2023"),
    end: new Date("April 13, 2023"),
  },
  {
    year: 2028,
    numberOfDays: 7,
    start: new Date("April 10, 2028"),
    end: new Date("April 17, 2028"),
  },
  {
    year: 2028,
    numberOfDays: 8,
    start: new Date("April 10, 2028"),
    end: new Date("April 18, 2028"),
  },
])(
  "Get Passover for $year with $numberOfDays Days",
  ({ year, numberOfDays, start, end }) => {
    // Given

    // When
    const obtained = getPassoverForYear(year, numberOfDays);

    // Then
    expect(compareDates(start, obtained.start)).toBeTruthy();
    expect(compareDates(end, obtained.end)).toBeTruthy();
  },
);

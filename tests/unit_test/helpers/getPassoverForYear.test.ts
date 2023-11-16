import getPassoverForYear from "../../../src/helpers/getPassoverForYear";
import { compareDates } from "./testHelpers";

test.each([
  [2023, 7, new Date("April 5, 2023"), new Date("April 12, 2023")],
  [2023, 8, new Date("April 5, 2023"), new Date("April 13, 2023")],
  [2028, 7, new Date("April 10, 2028"), new Date("April 17, 2028")],
  [2028, 8, new Date("April 10, 2028"), new Date("April 18, 2028")],
])(
  "Get Passover for %p with %p Days",
  (year: number, numberOfDays: number, start: Date, end: Date) => {
    // Given

    // When
    const obtained = getPassoverForYear(year, numberOfDays);

    // Then
    expect(compareDates(start, obtained.start)).toBeTruthy();
    expect(compareDates(end, obtained.end)).toBeTruthy();
  },
);

import getHolidaysForYear from "../../../src/helpers/getHolidaysForYear";
import { compareDates } from "./testHelpers";

// TODO: Parameterize this test
// TODO: Add more edge cases

test("Get Holidays With Overlap and Seven Days", () => {
  const inputYear = 2024;
  const expectedPassoverStart = new Date("April 22, 2024");
  const expectedPassoverEnd = new Date("April 29, 2024");
  const expectedEasterSunday = new Date("March 31, 2024");
  const expectedOverlap = false;
  const obtained = getHolidaysForYear(inputYear, 7);
  getHolidaysForYear(inputYear, 7);
  expect(obtained.year).toEqual(inputYear);
  expect(
    compareDates(obtained.passoverStart, expectedPassoverStart),
  ).toBeTruthy();
  expect(compareDates(obtained.passoverEnd, expectedPassoverEnd)).toBeTruthy();
  expect(
    compareDates(obtained.easterSundayDate, expectedEasterSunday),
  ).toBeTruthy();
  expect(obtained.overlap).toEqual(expectedOverlap);
});

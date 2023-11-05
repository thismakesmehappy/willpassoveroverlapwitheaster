import getHolidaysForYear from "../../../src/helpers/getHolidaysForYear";

test("Get Holidays With Overlap and Seven Days", () => {
  const inputYear = 2024;
  const expectedPassoverStart = new Date("April 22, 2024 03:24:00");
  const expectedPassoverEnd = new Date("April 29, 2024 03:24:00");
  const expectedEasterSunday = new Date("March 31, 2024 03:24:00");
  const expectedOverlap = false;
  const { year, passoverStart, passoverEnd, easterSundayDate, overlap } =
    getHolidaysForYear(inputYear, 7);
  expect(year).toEqual(inputYear);
  expect(
    compareDatesWithoutTime(passoverStart, expectedPassoverStart),
  ).toBeTruthy();
  expect(
    compareDatesWithoutTime(passoverEnd, expectedPassoverEnd),
  ).toBeTruthy();
  expect(
    compareDatesWithoutTime(easterSundayDate, expectedEasterSunday),
  ).toBeTruthy();
  expect(overlap).toEqual(expectedOverlap);
});

const compareDatesWithoutTime = (obtained: Date, expected: Date) => {
  return (
    obtained.getFullYear() == expected.getFullYear() &&
    obtained.getMonth() == expected.getMonth() &&
    obtained.getDate() == expected.getDate()
  );
};

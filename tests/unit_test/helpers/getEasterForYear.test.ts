import getEasterSundayForYear from "../../../src/helpers/getEasterSundayForYear";
import { compareDates } from "./testHelpers";

test.each([
  [2023, "April 1"],
  [2020, "April 12"],
  [2030, "April 21"],
])("Get Easter Sunday for %p", (year: number, date: string) => {
  // Given
  const expected = new Date(`${date}, ${year}`);

  // When
  const obtained = getEasterSundayForYear(2023);

  // Then
  expect(compareDates(obtained, expected));
});

test.each([
  [-1000, "Year must be greater than 1000"],
  [100, "Year must be greater than 1000"],
])(
  "Get Easter Sunday for %p, %p (error)",
  (year: number, errorType: string) => {
    expect(() => getEasterSundayForYear(year)).toThrow(errorType);
  },
);

test("Get Easter Sunday for Date below 1000 (error)", () => {
  expect(() => getEasterSundayForYear(100)).toThrow();
});

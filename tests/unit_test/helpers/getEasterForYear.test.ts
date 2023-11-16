import getEasterSundayForYear from "../../../src/helpers/getEasterSundayForYear";
import { compareDates } from "./testHelpers";

test.each([
  { year: 2023, date: "April 1" },
  { year: 2020, date: "April 12" },
  { year: 2030, date: "April 21" },
])("Get Easter Sunday for $year", ({ year, date }) => {
  // Given --> setup in parameterized args
  const expected = new Date(`${date}, ${year}`);

  // When
  const obtained = getEasterSundayForYear(2023);

  // Then
  expect(compareDates(obtained, expected));
});

test.each([
  {
    year: -1000,
    errorMessage: "Year must be greater than 1000",
    message: "negative year",
  },
  {
    year: 100,
    errorMessage: "Year must be greater than 1000",
    message: "positive year, under 1000",
  },
])(
  "Get Easter Sunday for $year, $message (error)",
  ({ year, errorMessage }) => {
    // Given  --> setup in parameterized args

    // When
    // Then
    expect(() => getEasterSundayForYear(year)).toThrow(errorMessage);
  },
);

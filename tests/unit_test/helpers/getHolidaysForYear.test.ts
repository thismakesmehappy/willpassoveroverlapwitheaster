import getHolidaysForYear from "../../../src/helpers/getHolidaysForYear";
import { compareDates } from "./testHelpers";

test.each([
  {
    year: 2024,
    passoverDays: 7,
    expectedOverlap: false,
    expectedPassoverStart: new Date("April 22, 2024"),
    expectedPassoverEnd: new Date("April 29, 2024"),
    expectedEasterSunday: new Date("March 31, 2024"),
  },
  {
    year: 2024,
    passoverDays: 8,
    expectedOverlap: false,
    expectedPassoverStart: new Date("April 22, 2024"),
    expectedPassoverEnd: new Date("April 30, 2024"),
    expectedEasterSunday: new Date("March 31, 2024"),
  },
  {
    year: 2025,
    passoverDays: 8,
    expectedOverlap: true,
    expectedPassoverStart: new Date("April 12, 2025"),
    expectedPassoverEnd: new Date("April 20, 2025"),
    expectedEasterSunday: new Date("April 20, 2025"),
  },
  {
    year: 2025,
    passoverDays: 7,
    expectedOverlap: false,
    expectedPassoverStart: new Date("April 12, 2025"),
    expectedPassoverEnd: new Date("April 19, 2025"),
    expectedEasterSunday: new Date("April 20, 2025"),
  },
  {
    year: 2026,
    passoverDays: 7,
    expectedOverlap: true,
    expectedPassoverStart: new Date("April 1, 2026"),
    expectedPassoverEnd: new Date("April 8, 2026"),
    expectedEasterSunday: new Date("April 5, 2026"),
  },
  {
    year: 2026,
    passoverDays: 8,
    expectedOverlap: true,
    expectedPassoverStart: new Date("April 1, 2026"),
    expectedPassoverEnd: new Date("April 9, 2026"),
    expectedEasterSunday: new Date("April 5, 2026"),
  },
])(
  "Get Holidays for $year and $passoverDays days, with overlap $expectedOverlap",
  ({
    year,
    passoverDays,
    expectedOverlap,
    expectedPassoverStart,
    expectedPassoverEnd,
    expectedEasterSunday,
  }) => {
    // Given --> setup in parameterized args

    // When
    const obtained = getHolidaysForYear(year, passoverDays);

    // Then
    expect(obtained.year).toEqual(year);
    expect(
      compareDates(obtained.passoverStart, expectedPassoverStart),
    ).toBeTruthy();
    expect(
      compareDates(obtained.passoverEnd, expectedPassoverEnd),
    ).toBeTruthy();
    expect(
      compareDates(obtained.easterSundayDate, expectedEasterSunday),
    ).toBeTruthy();
    expect(obtained.overlap).toEqual(expectedOverlap);
  },
);

import getDoEasterSundayAndPassoverOverlap from "helpers/getDoEasterSundayAndPassoverOverlap";
import { PassoverDates } from "helpers/getPassoverForYear";

// these are not real holiday dates, we just care that the relationship of the holidays matches
test.each([
  {
    expected: true,
    passoverStart: new Date("January 17, 1984"),
    passoverEnd: new Date("January 25, 1984"),
    easterSunday: new Date("January 20, 1984"),
    message: "Easter falls in the middle",
  },
  {
    expected: true,
    passoverStart: new Date("January 17, 1984"),
    passoverEnd: new Date("January 25, 1984"),
    easterSunday: new Date("January 25, 1984"),
    message: "Easter falls on the last day of Passover",
  },
  {
    expected: true,
    passoverStart: new Date("January 17, 1984"),
    passoverEnd: new Date("January 25, 1984"),
    easterSunday: new Date("January 17, 1984"),
    message: "Easter falls on the first day of Passover",
  },
  {
    expected: false,
    passoverStart: new Date("January 17, 1984"),
    passoverEnd: new Date("January 25, 1984"),
    easterSunday: new Date("January 16, 1984"),
    message: "Easter falls before Passover",
  },
  {
    expected: false,
    passoverStart: new Date("January 17, 1984"),
    passoverEnd: new Date("January 25, 1984"),
    easterSunday: new Date("January 26, 1984"),
    message: "Easter falls after Passover",
  },
  {
    expected: false,
    passoverStart: new Date("January 17, 1984"),
    passoverEnd: new Date("January 25, 1984"),
    easterSunday: new Date("January 20, 1983"),
    message: "dates overlap on different years",
  },
])(
  "Passover and Easter Sunday Easter Overlap: $expected; $message",
  ({ expected, passoverStart, passoverEnd, easterSunday }) => {
    // Given --> setup in parameterized args
    const passoverDates: PassoverDates = {
      start: passoverStart,
      end: passoverEnd,
    };

    // When
    const obtained = getDoEasterSundayAndPassoverOverlap(
      passoverDates,
      easterSunday,
    );

    // Then
    expect(obtained).toEqual(expected);
  },
);

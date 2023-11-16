import getDoEasterSundayAndPassoverOverlap from "../../../src/helpers/getDoEasterSundayAndPassoverOverlap";
import { PassoverDates } from "../../../src/helpers/getPassoverForYear";

// TODO: Parameterize this test suite

test("Passover and Easter Sunday Overlap, Easter falls in the middle", () => {
  // these are not real holiday dates, we just care that the relationship of the holidays matches

  // Given
  const passoverStart = new Date("January 17, 1984 03:24:00");
  const passoverEnd = new Date("January 25, 1984 03:24:00");
  const easterSunday = new Date("January 20, 1984 03:24:00");
  const passoverDates: PassoverDates = {
    start: passoverStart,
    end: passoverEnd,
  };

  // When
  // Then
  expect(
    getDoEasterSundayAndPassoverOverlap(passoverDates, easterSunday),
  ).toBeTruthy();
});

test("Passover and Easter Sunday Overlap, Easter falls on the last day of Passover", () => {
  // these are not real holiday dates, we just care that the relationship of the holidays matches

  // Given
  const passoverStart = new Date("January 17, 1984 03:24:00");
  const passoverEnd = new Date("January 25, 1984 03:24:00");
  const easterSunday = new Date("January 25, 1984 03:24:00");
  const passoverDates: PassoverDates = {
    start: passoverStart,
    end: passoverEnd,
  };

  // When
  // Then
  expect(
    getDoEasterSundayAndPassoverOverlap(passoverDates, easterSunday),
  ).toBeTruthy();
});

test("Passover and Easter Overlap, Easter falls on the first day of Passover", () => {
  // these are not real holiday dates, we just care that the relationship of the holidays matches

  // Given
  const passoverStart = new Date("January 17, 1984 03:24:00");
  const passoverEnd = new Date("January 25, 1984 03:24:00");
  const easterSunday = new Date("January 17, 1984 03:24:00");
  const passoverDates: PassoverDates = {
    start: passoverStart,
    end: passoverEnd,
  };

  // When
  // Then
  expect(
    getDoEasterSundayAndPassoverOverlap(passoverDates, easterSunday),
  ).toBeTruthy();
});

test("Passover and Easter Do Not Overlap, Easter falls before Passover", () => {
  // these are not real holiday dates, we just care that the relationship of the holidays matches

  // Given
  const passoverStart = new Date("January 17, 1984 03:24:00");
  const passoverEnd = new Date("January 25, 1984 03:24:00");
  const easterSunday = new Date("January 16, 1984 03:24:00");
  const passoverDates: PassoverDates = {
    start: passoverStart,
    end: passoverEnd,
  };

  // When
  // Then
  expect(
    getDoEasterSundayAndPassoverOverlap(passoverDates, easterSunday),
  ).toBeFalsy();
});

test("Passover and Easter Sunday Do Not Overlap, Easter falls after Passover", () => {
  // these are not real holiday dates, we just care that the relationship of the holidays matches

  // Given
  const passoverStart = new Date("January 17, 1984 03:24:00");
  const passoverEnd = new Date("January 25, 1984 03:24:00");
  const easterSunday = new Date("January 26, 1984 03:24:00");
  const passoverDates: PassoverDates = {
    start: passoverStart,
    end: passoverEnd,
  };

  // When
  // Then
  expect(
    getDoEasterSundayAndPassoverOverlap(passoverDates, easterSunday),
  ).toBeFalsy();
});

test("Passover and Easter Sunday Do Not Overlap, dates overlap on different years", () => {
  // these are not real holiday dates, we just care that the relationship of the holidays matches

  // Given
  const passoverStart = new Date("January 17, 1984 03:24:00");
  const passoverEnd = new Date("January 25, 1984 03:24:00");
  const easterSunday = new Date("January 20, 1983 03:24:00");
  const passoverDates: PassoverDates = {
    start: passoverStart,
    end: passoverEnd,
  };

  // When
  // Then
  expect(
    getDoEasterSundayAndPassoverOverlap(passoverDates, easterSunday),
  ).toBeFalsy();
});

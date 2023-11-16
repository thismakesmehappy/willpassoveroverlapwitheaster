import getYearForNextHolidays from "../../../src/helpers/getYearForNextHolidays";
// import {Date} from

test.each([
  {
    // Before both holidays
    date: "January 1, 2025",
    days: 7,
    expected: 2025,
  },
  {
    // Before both holidays
    date: "January 1, 2025",
    days: 8,
    expected: 2025,
  },
  {
    // First day of overlap
    date: "April 12, 2025",
    days: 7,
    expected: 2025,
  },
  {
    // First day of overlap
    date: "April 12, 2025",
    days: 8,
    expected: 2025,
  },
  {
    // Middle of overlap
    date: "April 15, 2025",
    days: 7,
    expected: 2025,
  },
  {
    // Middle of overlap
    date: "April 15, 2025",
    days: 8,
    expected: 2025,
  },
  {
    // After overlap
    date: "April 20, 2025",
    days: 7,
    expected: 2025,
  },
  {
    // Last day of overlap
    date: "April 19, 2025",
    days: 7,
    expected: 2025,
  },
  {
    // Last day of overlap
    date: "April 20, 2025",
    days: 8,
    expected: 2025,
  },
  {
    // After both holidays
    date: "April 30, 2025",
    days: 7,
    expected: 2026,
  },
  {
    // Last day of overlap
    date: "April 20, 2025",
    days: 8,
    expected: 2025,
  },
  {
    // No overlap, between holidays
    date: "April 1, 2023",
    days: 7,
    expected: 2023,
  },
  {
    // No overlap, after holidays
    date: "May 1, 2023",
    days: 8,
    expected: 2024,
  },
])(
  "Get Year For Next Holidays, today is $date, Passover lasts $days days, expected $expected",
  ({ date, days, expected }) => {
    // Given
    jest.useFakeTimers().setSystemTime(new Date(date));

    // When
    const obtained = getYearForNextHolidays(days);

    // Then
    expect(obtained).toEqual(expected);
  },
);

import getNextX from "../../../src/helpers/getNextX";

test.each([
  [0, 7],
  [1, 7],
  [4, 7],
  [12, 7],
  [0, 8],
  [1, 8],
  [4, 8],
  [12, 8],
])("Test %p years with %p days", (numberOfYears, numberOfDays) => {
  // Given
  const oneDayInMilliseconds = 24 * 60 * 60 * 1000;
  const numberOfDaysInMilliseconds = numberOfDays * oneDayInMilliseconds;

  // When
  const nextX = getNextX(numberOfYears, numberOfDays);

  // Then
  expect(nextX.length).toEqual(numberOfYears);
  nextX.forEach((holidays) => {
    expect(
      holidays.passoverEnd.getTime() - holidays.passoverStart.getTime(),
    ).toEqual(numberOfDaysInMilliseconds);
  });
});

import getNextX from "helpers/getNextX";

test.each([
  { numberOfYears: 0, numberOfDays: 7 },
  { numberOfYears: 1, numberOfDays: 7 },
  { numberOfYears: 4, numberOfDays: 7 },
  { numberOfYears: 12, numberOfDays: 7 },
  { numberOfYears: 0, numberOfDays: 8 },
  { numberOfYears: 1, numberOfDays: 8 },
  { numberOfYears: 4, numberOfDays: 8 },
  { numberOfYears: 12, numberOfDays: 8 },
])(
  "Test $numberOfYears years with $numberOfDays days",
  ({ numberOfYears, numberOfDays }) => {
    // Given  --> setup in parameterized args

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
  },
);

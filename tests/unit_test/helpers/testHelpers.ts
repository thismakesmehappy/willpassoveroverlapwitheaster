export const compareDates = (obtained: Date, expected: Date) => {
  return (
    obtained.getFullYear() == expected.getFullYear() &&
    obtained.getMonth() == expected.getMonth() &&
    obtained.getDate() == expected.getDate()
  );
};

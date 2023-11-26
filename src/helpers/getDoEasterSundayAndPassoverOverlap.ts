import { PassoverDates } from "helpers";

export const getDoEasterSundayAndPassoverOverlap = (
  passoverDates: PassoverDates,
  easterSundayDate: Date,
) => {
  const passoverStart: Date = passoverDates.start;
  const passoverEnd: Date = passoverDates.end;
  return easterSundayDate >= passoverStart && easterSundayDate <= passoverEnd;
};

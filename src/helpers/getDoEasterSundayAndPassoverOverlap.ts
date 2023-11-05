import { PassoverDates } from "./getPassoverForYear.ts";

const getDoEasterSundayAndPassoverOverlap = (
  passoverDates: PassoverDates,
  easterSundayDate: Date,
) => {
  const passoverStart: Date = passoverDates.start;
  const passoverEnd: Date = passoverDates.end;
  return easterSundayDate >= passoverStart && easterSundayDate <= passoverEnd;
};

export default getDoEasterSundayAndPassoverOverlap;

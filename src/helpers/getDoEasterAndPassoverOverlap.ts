import { PassoverDates } from "./getPassoverForYear.ts";

const getDoEasterAndPassoverOverlap = (
  passoverDates: PassoverDates,
  easterDate: Date,
) => {
  const passoverStart: Date = passoverDates.start;
  const passoverEnd: Date = passoverDates.end;
  return easterDate >= passoverStart && easterDate <= passoverEnd;
};

export default getDoEasterAndPassoverOverlap;

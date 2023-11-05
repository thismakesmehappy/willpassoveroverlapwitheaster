import getEasterSundayForYear from "../../../src/helpers/getEasterSundayForYear";

test("Get Easter Sunday for 2023", () => {
  // Easter Sunday 2023 April 9
  const easterSunday = getEasterSundayForYear(2023);
  expect(easterSunday.getFullYear()).toEqual(2023);
  expect(easterSunday.getDate()).toEqual(9);
  expect(easterSunday.getMonth()).toEqual(3);
  expect(easterSunday.getDay()).toEqual(0);
});

test("Get Easter Sunday for 2020", () => {
  // Easter Sunday 2023 April 12
  const easterSunday = getEasterSundayForYear(2020);
  expect(easterSunday.getFullYear()).toEqual(2020);
  expect(easterSunday.getDate()).toEqual(12);
  expect(easterSunday.getMonth()).toEqual(3);
  expect(easterSunday.getDay()).toEqual(0);
});

test("Get Easter Sunday for 2030", () => {
  // Easter Sunday 2023 April 21
  const easterSunday = getEasterSundayForYear(2030);
  expect(easterSunday.getFullYear()).toEqual(2030);
  expect(easterSunday.getDate()).toEqual(21);
  expect(easterSunday.getMonth()).toEqual(3);
  expect(easterSunday.getDay()).toEqual(0);
});

test("Get Easter Sunday for Negative Date (error)", () => {
  expect(() => getEasterSundayForYear(-1000)).toThrow();
});

test("Get Easter Sunday for Date below 1000 (error)", () => {
  expect(() => getEasterSundayForYear(100)).toThrow();
});

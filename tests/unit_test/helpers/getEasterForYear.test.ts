import getEasterForYear from "../../../src/helpers/getEasterForYear";

test("Get Easter for 2023", () => {
  // Easter 2023 April 9
  const easter = getEasterForYear(2023);
  expect(easter.getFullYear()).toEqual(2023);
  expect(easter.getDate()).toEqual(9);
  expect(easter.getMonth()).toEqual(3);
  expect(easter.getDay()).toEqual(0);
});

test("Get Easter for 2020", () => {
  // Easter 2023 April 12
  const easter = getEasterForYear(2020);
  expect(easter.getFullYear()).toEqual(2020);
  expect(easter.getDate()).toEqual(12);
  expect(easter.getMonth()).toEqual(3);
  expect(easter.getDay()).toEqual(0);
});

test("Get Easter for 2030", () => {
  // Easter 2023 April 21
  const easter = getEasterForYear(2030);
  expect(easter.getFullYear()).toEqual(2030);
  expect(easter.getDate()).toEqual(21);
  expect(easter.getMonth()).toEqual(3);
  expect(easter.getDay()).toEqual(0);
});

test("Get Easter for Negative Date (error)", () => {
  expect(() => getEasterForYear(-1000)).toThrow();
});

test("Get Easter for Date below 1000 (error)", () => {
  expect(() => getEasterForYear(100)).toThrow();
});

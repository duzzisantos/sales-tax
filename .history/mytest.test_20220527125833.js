// const sum = require('./mytest');

// test('adds 1 + 2 to equal 3', () => {
//   expect(sum(1, 2)).toBe(3);
// });

const {
  roundedTax,
  totalTaxes,
  payment,
  totalPayment,
  chocPlusTax,
  musicCDPlusTax,
  bookPlusTax,
  basicPlusImport,
  taxFree,
  importDuty,
  basicTax,
  importedChocPlusTax,
  importedPerfPlusTax,
  importedPerfPlusTaxRounded,
  totalTaxes2,
  roundedTax2,
  rounded1,
  rounded2,
  rounded4,
  pillsPlusTax,
  totalTaxes3,
  roundedPayment,
  book,
  musicCD,
  choc,
  importedChoc,
  importedPerf,
  importedPerf2,
  importedChoc2,
  pills,
  bookPlusTaxRounded,
  musicCDPlusTaxRounded,
  chocPlusTaxRounded,
  importedChocPlusTaxRounded,
} = require("./mytest");

//APP TEST ONE
test("this is tax free, hence return only price value to be 12.49", () => {
  expect(bookPlusTaxRounded(bookPlusTax)).toBe(12.49);
});

test("multiplies basicTax rate by musicCD price, divides by 100, and adds to musicCD price to equal 16.49", () => {
  expect(musicCDPlusTaxRounded(musicCDPlusTax)).toBe(16.49);
});

test("this is tax free, hence return only price value to be 0.85", () => {
  expect(chocPlusTaxRounded(chocPlusTax)).toBe(0.85);
});

test("total payment to equal 29.83", () => {
  expect(payment(totalPayment)).toBe(29.83);
});

test("total taxes to equal 1.50", () => {
  expect(roundedTax(totalTaxes)).toBe(1.5);
});

//APP TEST TWO

test("price + tax contribution equals 10.50", () => {
  expect(importedChocPlusTaxRounded(importedChocPlusTax)).toBe(10.5);
});

test("price + basic and import tax contribution equals 54.65", () => {
  expect(importedPerfPlusTaxRounded(importedPerfPlusTax)).toBe(54.65);
});


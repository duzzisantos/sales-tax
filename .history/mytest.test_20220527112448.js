// const sum = require('./mytest');

// test('adds 1 + 2 to equal 3', () => {
//   expect(sum(1, 2)).toBe(3);
// });

const {
  roundedTax,
  totalTaxes,
  payment,
  chocPlusTax,
  musicCDPlusTax,
  bookPlusTax,
  basicPlusImport,
  taxFree,
  importDuty,
  basicTax,
  importedChocPlusTax,
  importedPerfPlusTax,
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
} = require("./mytest");

test("adds basicTax rate + importDuty rate to equal 15", () => {
  expect(basicPlusImport(basicTax, importDuty)).toBe(15);
});

//APP TEST ONE
test("this is tax free, hence return only price value to be 12.49", () => {
  expect(bookPlusTax(taxFree, book)).toBe(12.49);
});

test("multiplies basicTax rate by musicCD price, divides by 100, and adds to musicCD price to equal 16.49", () => {
  expect(parseFloat(musicCDPlusTax(basicTax, musicCD).toFixed(2))).toBe(16.49);
});

test("this is tax free, hence return only price value to be 0.85", () => {
  expect(chocPlusTax(taxFree, choc)).toBe(0.85);
});

test("total payment to equal 29.83", () => {
  expect(
    parseFloat(totalPayment(bookPlusTax, musicCDPlusTax, chocPlusTax)).toFixed(2)
  ).toBe(29.83);
});

test("total taxes to equal 1.50", () => {
  expect(roundedTax(totalTaxes)).toBe(1.5);
});

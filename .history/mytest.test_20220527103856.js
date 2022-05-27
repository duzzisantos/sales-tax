// const sum = require('./mytest');

// test('adds 1 + 2 to equal 3', () => {
//   expect(sum(1, 2)).toBe(3);
// });

const {
  roundedTax,
  totalTaxes,
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
test(
  "multiplies taxFree rate by book price, and adds book price to equal 12.49", () => {
      expect(bookPlusTax(taxFree, book)).toBe(12.49)
  }
);

test("multiplies basicTax rate by musicCD price, divides by 100, and adds to musicCD price to equal 16.49", () => {
  expect(musicCDPlusTax(basicTax, musicCD)).toBe(16.49);
});

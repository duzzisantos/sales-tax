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
    chocPlusTaxRounded,
    musicCDPlusTax,
    musicCDPlusTaxRounded,
    bookPlusTax,
    bookPlusTaxRounded,
    basicPlusImport,
    taxFree,
    importDuty,
    basicTax,
    importedChocPlusTax,
    importedPerfPlusTax,
    importedPerfPlusTaxRounded,
    importedChocPlusTaxRounded,
    totalTaxes2,
    roundedTax2,
    payment2,
    rounded1,
    rounded2,
    rounded4,
    pillsPlusTax,
    totalTaxes3,
    roundedTax3,
    payment3,
    totalPayment3,
    book,
    musicCD,
    choc,
    importedChoc,
    importedPerf,
    importedPerf2,
    importedChoc2,
    pills,
    bottlePerfPlusTax,
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
  expect(roundedTax(totalTaxes)).toBe(1.50);
});

//APP TEST TWO

test("price + tax contribution equals 10.50", () => {
  expect(importedChocPlusTaxRounded(importedChocPlusTax)).toBe(10.50);
});

test("price + basic and import tax contribution equals 54.65", () => {
  expect(importedPerfPlusTaxRounded(importedPerfPlusTax)).toBe(54.65);
});


//APP TEST THREE

test("price + import tax contribution equals 32.19", () => {
    expect(rounded1(importedPerfPlusTax)).toBe(32.19)
})

test("price + basic tax equals 20.89", () => {
    expect(rounded2(bottlePerfPlusTax)).toBe(20.89)
})

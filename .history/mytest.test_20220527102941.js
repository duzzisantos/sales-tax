// const sum = require('./mytest');

// test('adds 1 + 2 to equal 3', () => {
//   expect(sum(1, 2)).toBe(3);
// });

const {roundedTax,
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
    roundedPayment} = require("./mytest")



test("adds basicTax + importDuty to equal 15", () => {
    expect(basicPlusImport(basicTax,importDuty)).toBe(15)
})

 //APP TEST ONE
test("multiplies basicTax by musicCD, divides by 100, and adds to musicCD", () => {
    expect(musicCDPlusTax(basicTax, musicCD))
})
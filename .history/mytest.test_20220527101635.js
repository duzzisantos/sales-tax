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
const 
test("adds basicTax + importDuty to equal 15", () => {
    expect(basicPlusImport(basicTax,importDuty)).toBe(15)
})
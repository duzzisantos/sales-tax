// const sum = require('./mytest');

// test('adds 1 + 2 to equal 3', () => {
//   expect(sum(1, 2)).toBe(3);
// });

const basicPlusImport = require("./mytest")
test("adds basicTax + importDuty to equal 15", () => {
    expect(basicPlusImport(basicTax,importDuty)).toBe(15)
})
let taxFree = 0;
let basicTax = 10;
let importDuty = 5;

let book = 12.49
let musicCD = 14.99
let choc = 0.85

let importedChoc = 10
let importedPerf = 47.50
let importedPerf2 = 27.99
let bottlePerf = 9.75
let importedChoc2 = 11.25


function basicPlusImport(){
    return basicTax + importDuty
}

function bookPlusTax(){
    return taxfree * book 
}
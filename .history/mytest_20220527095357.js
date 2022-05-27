let taxFree = 0;
let basicTax = 10;
let importDuty = 5;

let book = 12.49;
let musicCD = 14.99;
let choc = 0.85;

let importedChoc = 10;
let importedPerf = 47.5;

let importedPerf2 = 27.99;
let bottlePerf = 18.99;
let pills = 9.75
let importedChoc2 = 11.25;

// APP ONE TEST
function basicPlusImport() {
  return basicTax + importDuty;
}

function bookPlusTax() {
  return taxFree * book + book;
}

let musicCDPlusTax = () => {
  return (basicTax * musicCD) / 100 + musicCD;
};

let chocPlusTax = () => {
  return taxFree * choc + choc;
};

let totalPayment = () => {
  return +bookPlusTax + +musicCDPlusTax + +chocPlusTax;
};

let totalTaxes = () => {
  return bookPlusTax - book + (musicCDPlusTax - musicCD) + (chocPlusTax - choc);
};

let roundedTax = parseFloat((Math.ceil(totalTaxes * 20) / 20).toFixed(2));


// APP TWO TEST

let importedChocPlusTax = () => {
    return (importDuty * importedChoc) / 100 + importedChoc
}
let importedPerfPlusTax = () => {
    return (basicPlusImport * importedPerf) / 100 + importedPerf
}
let totalTaxes2 = () => {
    return ((importDuty * importedChoc)/ 100 + (basicPlusImport * importedPerf))
}

let roundedTax2 = () => {
    return parseFloat((Math.ceil(totalTaxes2 *  20) / 20).toFixed(2));
}


//APP THREE TEST

let importedPerfPlusTax2 = () => {
    return (importDuty * importedPerf2) / 100 + importedPerf2
}
let rounded1 =  parseFloat(importedPerfPlusTax2.toFixed(2))

let bottlePerfPlusTax = () => {

}
module.exports = {
    roundedTax,
    totalTaxes,
    totalPayment,
    chocPlusTax,
    musicCDPlusTax,
    bookPlusTax,
    basicPlusImport,
    importedChocPlusTax,
    importedPerfPlusTax,
    totalTaxes2,
    roundedTax2
  };


  

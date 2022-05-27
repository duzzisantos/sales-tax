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

const musicCDPlusTax = () => {
  return (basicTax * musicCD) / 100 + musicCD;
};

const chocPlusTax = () => {
  return taxFree * choc + choc;
};

const totalPayment = () => {
  return +bookPlusTax + +musicCDPlusTax + +chocPlusTax;
};

const totalTaxes = () => {
  return bookPlusTax - book + (musicCDPlusTax - musicCD) + (chocPlusTax - choc);
};

const roundedTax = parseFloat((Math.ceil(totalTaxes * 20) / 20).toFixed(2));

module.exports = {
  roundedTax,
  totalTaxes,
  totalPayment,
  chocPlusTax,
  musicCDPlusTax,
  bookPlusTax,
  basicPlusImport,
};

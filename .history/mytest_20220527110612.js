let taxFree = 0;
let basicTax = 10;
let importDuty = 5;
function basicPlusImport() {
  return basicTax + importDuty;
}

let book = 12.49;
let musicCD = 14.99;
let choc = 0.85;

let importedChoc = 10;
let importedPerf = 47.5;

let importedPerf2 = 27.99;
let bottlePerf = 18.99;
let pills = 9.75;
let importedChoc2 = 11.25;

// APP ONE TEST

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
  return parseFloat(bookPlusTax + musicCDPlusTax + chocPlusTax);
};

let totalTaxes = () => {
  return parseFloat(
    bookPlusTax - book + (musicCDPlusTax - musicCD) + (chocPlusTax - choc)
  );
};

let roundedTax = () => {
    return parseFloat((Math.ceil(totalTaxes * 20) / 20).toFixed(2));
}

// APP TWO TEST

let importedChocPlusTax = () => {
  return (importDuty * importedChoc) / 100 + importedChoc;
};
let importedPerfPlusTax = () => {
  return (basicPlusImport * importedPerf) / 100 + importedPerf;
};
let totalTaxes2 = () => {
  return (importDuty * importedChoc) / 100 + basicPlusImport * importedPerf;
};

let roundedTax2 = () => {
  return parseFloat((Math.ceil(totalTaxes2 * 20) / 20).toFixed(2));
};

//APP THREE TEST

let importedPerf2PlusTax = () => {
  return (importDuty * importedPerf2) / 100 + importedPerf2;
};
let rounded1 = parseFloat(importedPerf2PlusTax).toFixed(2);

let bottlePerfPlusTax = () => {
  return (basicTax * bottlePerf) / 100 + bottlePerf;
};

let rounded2 = parseFloat(bottlePerfPlusTax).toFixed(2);

let pillsPlusTax = () => {
  return taxFree * pills + pills;
};
let importedChoc2PlusTax = () => {
  return (importDuty * importedChoc2) / 100 + importedChoc2;
};

let rounded4 = parseFloat(Math.ceil(importedChoc2PlusTax * 20) / 20).toFixed(2);

let everyThing = () => {
  return rounded1 + rounded2 + pillsPlusTax + rounded4;
};

let roundedPayment = () => {
  return parseFloat(everyThing).toFixed(2);
};

let totalTaxes3 = () => {
  return (
    importedPerf2PlusTax -
    importedPerf2 +
    (bottlePerfPlusTax - bottlePerf) +
    (pillsPlusTax - pills) +
    (importedChoc2PlusTax - importedChoc2)
  );
};

let roundedTax3 = () => {
  return parseFloat(Math.ceil(totalTaxes3 * 20) / 20).toFixed(2);
};
module.exports = {
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
};

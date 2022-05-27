let taxFree = 0;
let basicTax = 10;
let importDuty = 5;
let basicPlusImport = basicTax + importDuty;

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

let bookPlusTax = taxFree * book + book;
let bookPlusTaxRounded = () => {
  return parseFloat(bookPlusTax.toFixed(2));
};

let musicCDPlusTax = (basicTax * musicCD) / 100 + musicCD;
let musicCDPlusTaxRounded = () => {
  return parseFloat(musicCDPlusTax.toFixed(2));
};

let chocPlusTax = taxFree * choc + choc;
let chocPlusTaxRounded = () => {
  return parseFloat(chocPlusTax.toFixed(2));
};

let totalPayment = bookPlusTax + musicCDPlusTax + chocPlusTax;
let payment = () => {
  return parseFloat(totalPayment.toFixed(2));
};

let totalTaxes =
  bookPlusTax - book + (musicCDPlusTax - musicCD) + (chocPlusTax - choc);

let roundedTax = () => {
  return parseFloat((Math.ceil(totalTaxes * 20) / 20).toFixed(2));
};

// APP TWO TEST

let importedChocPlusTax = (importDuty * importedChoc) / 100 + importedChoc;
let importedChocPlusTaxRounded = () => {
  return parseFloat((Math.ceil(importedChocPlusTax * 20) / 20).toFixed(2));
};
let importedPerfPlusTax = (basicPlusImport * importedPerf) / 100 + importedPerf;
let importedPerfPlusTaxRounded = () => {
  return parseFloat((Math.ceil(importedPerfPlusTax * 20) / 20).toFixed(2));
};

let totalTaxes2 =
  importedChocPlusTax - importedChoc + (importedPerfPlusTax - importedPerf);

let roundedTax2 = () => {
  return parseFloat((Math.ceil(totalTaxes2 * 20) / 20).toFixed(2));
};

let totalPayment2 = importedChocPlusTax + importedPerfPlusTax;
let payment2 = () => {
  return parseFloat((Math.ceil(totalPayment2 * 20) / 20).toFixed(2));
};
//APP THREE TEST

let importedPerf2PlusTax =
  (basicPlusImport * importedPerf2) / 100 + importedPerf2;
let rounded1 = () => {
  return parseFloat(importedPerf2PlusTax.toFixed(2));
};

let bottlePerfPlusTax = (basicTax * bottlePerf) / 100 + bottlePerf;

let rounded2 = () => {
  return parseFloat(bottlePerfPlusTax.toFixed(2));
};

let pillsPlusTax = taxFree * pills + pills;
let rounded3 = () => {
  return pillsPlusTax;
};
let importedChoc2PlusTax = (importDuty * importedChoc2) / 100 + importedChoc2;

let rounded4 = () => {
  return parseFloat((Math.ceil(importedChoc2PlusTax * 20) / 20).toFixed(2));
};

let totalPayment3 =
  importedPerf2PlusTax +
  bottlePerfPlusTax +
  pillsPlusTax +
  importedChoc2PlusTax;

let payment3 = () => {
  return parseFloat((Math.ceil(totalPayment3 * 20) / 20).toFixed(2));
};

let totalTaxes3 =
  importedPerf2PlusTax -
  importedPerf2 +
  (bottlePerfPlusTax - bottlePerf) +
  (pillsPlusTax - pills) +
  (importedChoc2PlusTax - importedChoc2);

let roundedTax3 = () => {
  return parseFloat((Math.ceil(totalTaxes3 * 20) / 20).toFixed(2));
};
module.exports = {
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
  totalPayment2,
  rounded1,
  rounded2,
  rounded3,
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
  bottlePerfPlusTax,
  importedChoc2,
  pills,
};

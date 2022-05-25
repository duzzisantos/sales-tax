//Define product tax parameters as basic, imported and non-taxbale
let products = [
  {
    id: 1,
    productName: "book",
    isBasicTaxable: false,
    isImported: false,
    isNonTaxable: true,
  },
  {
    id: 2,
    productName: "musicCD",
    isBasicTaxable: true,
    isImported: false,
    isNonTaxable: false,
  },
  {
    id: 3,
    productName: "chocolateBar",
    isBasicTaxable: true,
    isImported: false,
    isNonTaxable: false,
  },
  {
    id: 4,
    productName: "imported-box-chocolate",
    isBasicTaxable: true,
    isImported: true,
    isNonTaxable: false,
  },
  {
    id: 5,
    productName: "imported-perfume",
    isBasicTaxable: true,
    isImported: true,
    isNonTaxable: false,
  },
  {
    id: 6,
    productName: "bottle-perfume",
    isBasicTaxable: true,
    isImported: false,
    isNonTaxable: false,
  },
];

//All input variables declared

//Basket One
// let book = document.getElementById(".book").value;
// let musicCD = document.getElementById(".musicCD").value;
// let chocolateBar = document.getElementById(".chocolateBar").value;

//Basket Two

//Basket Three
let bottlePerfume = document.getElementById("bottle-perfume").value;
let headachePills = document.getElementById("pills").value;

//Variables for tax rate
let taxFree = 0;
let basicTax = 10;
let importDuty = 5;
let basicPlusImportDuty = basicTax + importDuty;

const basketOne = () => {
  let book = document.getElementById("book").value;
  let musicCD = document.getElementById("musicCD").value;
  let chocolateBar = document.getElementById("chocolateBar").value;

  //   let salesValue = +book + +musicCD + +chocolateBar
  let bookPlusTax = +taxFree * +book + +book;
  let musicCDPlusTax = (basicTax * +musicCD) / 100 + +musicCD;
  let chocolateBarPlusTax = +taxFree * +chocolateBar + +chocolateBar;
  let netPayment = +bookPlusTax + +musicCDPlusTax + +chocolateBarPlusTax;
  document.getElementById("total").value = netPayment.toFixed(2);
  let totalTaxes =
    (basicTax * +musicCD) / 100 + taxFree * +book + taxFree * +chocolateBar;
  document.getElementById("sales-taxes").value = totalTaxes.toFixed(2);
};

const basketTwo = () => {
  let importedChocolate = document.getElementById(
    "imported-box-chocolate"
  ).value;
  let importedPerfume2 = document.getElementById("imported-perfume").value;

  let importedChocolatePlusTax =
    (importDuty * +importedChocolate) / 100 + +importedChocolate;
  let importedPerfume2PlusTax =
    (basicPlusImportDuty * +importedPerfume2) / 100 + +importedPerfume2;
  console.log(importedChocolatePlusTax);
  console.log(importedPerfume2PlusTax);

  let netPayment = +importedChocolatePlusTax + +importedPerfume2PlusTax;
  document.getElementById("total2").value = netPayment.toFixed(2);
  let totalTaxes =
    (importDuty * +importedChocolate) / 100 +
    (basicPlusImportDuty * +importedPerfume2) / 100;
  document.getElementById("sales-taxes2").value = totalTaxes.toFixed(2);
};

const basketThree = () => {
  let importedPerfume2 = document.getElementById("imported-perfume2").value;
  let bottlePerfume = document.getElementById("bottle-perfume").value;
  let pills = document.getElementById("pills").value;
  let importedChocolate2 = document.getElementById("imported-box-chocolate2").value;

  let importedPerfume2PlusTax =
    (basicPlusImportDuty * +importedPerfume2) / 100 + +importedPerfume2;
  let bottlePerfumePlusTax =
    (basicTax * +bottlePerfume) / 100 + +bottlePerfume;
  let pillsPlusTax = (taxFree * +pills) + +pills;
  let importedChocolate2PlusTax =
    (importDuty * +importedChocolate2) / 100 + +importedChocolate2;

  let netPayment =
    importedPerfume2PlusTax +
    bottlePerfumePlusTax +
    pillsPlusTax +
    importedChocolate2PlusTax;
  document.getElementById("total3").value = netPayment.toFixed(2);
  let totalTaxes =
    importedPerfume2PlusTax -
    importedPerfume2 +
    (bottlePerfumePlusTax - bottlePerfume) +
    (pillsPlusTax - pills) +
    (importedChocolate2PlusTax - importedChocolate2);
  document.getElementById("sales-taxes3").value = totalTaxes.toPrecision(2);
};

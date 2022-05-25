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
// let book = document.querySelector(".book").value;
// let musicCD = document.querySelector(".musicCD").value;
// let chocolateBar = document.querySelector(".chocolateBar").value;

//Basket Two
let importedChocolate = document.querySelector(".imported-box-chocolate").value;
let importedPerfume = document.querySelector(".imported-perfume").value;

//Basket Three
let bottlePerfume = document.querySelector(".bottle-perfume").value;
let headachePills = document.querySelector(".pills").value;

//Variables for sales tax
// let salesTaxes = document.querySelector(".sales-taxes").value;

//Variables for tax rate
let taxFree = 0;
let basicTax = 10;
let basicPlusImportTax = 15;

let basketOne = () => {
  let book = document.querySelector(".book").value;
  let musicCD = document.querySelector(".musicCD").value;
  let chocolateBar = document.querySelector(".chocolateBar").value;

  let salesValue = parseInt(book) + parseInt(musicCD) + parseInt(chocolateBar);
  let bookSalesTax = taxFree * book;
  let musicCDTax = (basicTax * musicCD) / 100;
  let chocolateBarTax = (basicTax * chocolateBar) / 100;
  let totalTaxes = bookSalesTax + musicCDTax + chocolateBarTax;
  let salesTaxes = document.querySelector(".sales-taxes").value;
  salesTaxes = parseFloat(totalTaxes);
  console.log(salesValue);
  let netPayment = salesValue - salesTaxes;
  document.querySelector(".total").value = netPayment;

};

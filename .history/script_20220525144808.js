//Define product tax parameters as basic, imported and non-taxbale
var products = [
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
var book = document.querySelector(".book").value;
var musicCD = document.querySelector(".musicCD").value;
var chocolateBar = document.querySelector(".chocolateBar").value;

//Basket Two
var importedChocolate = document.querySelector(".imported-box-chocolate").value;
var importedPerfume = document.querySelector(".imported-perfume").value;

//Basket Three
var bottlePerfume = document.querySelector(".bottle-perfume").value;
var headachePills = document.querySelector(".pills").value;

//Variables for sales tax
// var salesTaxes = document.querySelector(".sales-taxes").value;

//Variables for tax rate
var taxFree = 0;
var basicTax = 10;
var basicPlusImportTax = 15;

var basketOne = () => {
  var salesValue = book + musicCD + chocolateBar;
  var bookSalesTax = taxFree * book;
  var musicCDTax = (basicTax * musicCD) / 100;
  var chocolateBarTax = (basicTax * chocolateBar) / 100;
  var totalTaxes = bookSalesTax + musicCDTax + chocolateBarTax;
  var salesTaxes = document.querySelector(".sales-taxes").value;
  salesTaxes = parseFloat(totalTaxes);
  var netPayment = salesValue - salesTaxes;
  document.querySelector(".total").value = netPayment;
  console.log(salesValue, salesTaxes, netPayment);
};

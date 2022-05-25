//Define product tax parameters as basic, imported and non-taxbale
const products = [
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
const book = document.querySelector(".book").value;
const musicCD = document.querySelector(".musicCD").value;
const chocolateBar = document.querySelector(".chocolateBar").value;

//Basket Two
const importedChocolate = document.querySelector(
  ".imported-box-chocolate"
).value;
const importedPerfume = document.querySelector(".imported-perfume").value;

//Basket Three
const bottlePerfume = document.querySelector(".bottle-perfume").value;
const headachePills = document.querySelector(".pills").value;

//Variables for sales tax and total
let salesTaxes = document.querySelector(".sales-taxes").value;
let total = document.querySelector(".total").value;

//Variables for tax rate
const taxFree = 0;
const basicTax = 10;
const basicPlusImportTax = 15;

const basketOne = () => {
  const bookSalesTax = (taxFree * book) / 100;
  const musicCDTax = ((basicTax * musicCD) / 100).toFixed(2);
  const chocolateBarTax = ((basicTax * chocolateBar) / 100).toFixed(2);
  const totalTaxes = bookSalesTax + musicCDTax + chocolateBarTax;
  salesTaxes = parseFloat(totalTaxes);
  let salesValue = book + musicCD + chocolateBar
  console.log(salesTaxes)
};

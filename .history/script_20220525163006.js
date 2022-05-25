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
let basicPlusImportTax = 15;

const basketOne = () => {
  let book = document.getElementById("book").value;
  let musicCD = document.getElementById("musicCD").value;
  let chocolateBar = document.getElementById("chocolateBar").value;

//   let salesValue = +book + +musicCD + +chocolateBar
  let bookPlusTax = (+taxFree * +book) + +book;
  let musicCDPlusTax = ((basicTax * +musicCD) / 100 + +musicCD);
  let chocolateBarPlusTax = (+taxFree * +chocolateBar) + +chocolateBar;
  let netPayment = +bookPlusTax + +musicCDPlusTax + +chocolateBarPlusTax;
  document.getElementById("total").value = netPayment.toFixed(2)
  let totalTaxes = ((basicTax * +musicCD)/ 100) + ((taxFree * +book)) + ((taxFree * +chocolateBar));
  document.getElementById("sales-taxes").value = totalTaxes.toFixed(2);
};


const basketTwo = () => {
    let importedChocolate = document.getElementById("imported-box-chocolate").value;
    let importedPerfume = document.getElementById("imported-perfume").value;

    let importedChocolatePlusTax = ((basicPlusImportTax * +importedChocolate) / 100 + +importedChocolate)
}
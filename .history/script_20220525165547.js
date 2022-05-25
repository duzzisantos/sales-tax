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
let basicPlusImportTax = basicTax + importDuty

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

    let importedChocolatePlusTax = ((importDuty * +importedChocolate) / 100 + +importedChocolate)
    let importedPerfumePlusTax = ((basicPlusImportTax * +importedPerfume)/100 + +importedPerfume)
    console.log(importedChocolatePlusTax)
    console.log(importedPerfumePlusTax)

    let netPayment = +importedChocolatePlusTax + +importedPerfumePlusTax;
    document.getElementById("total2").value = netPayment.toFixed(2)
    let totalTaxes = ((importDuty * +importedChocolate) / 100) + ((basicPlusImportTax * +importedPerfume)/ 100)
    document.getElementById("sales-taxes2").value = totalTaxes.toFixed(2)
}

const basketThree = () => {
    let importedPerfume = document.getElementById("imported-perfume").value
    let bottlePerfume = document.getElementById('bottle-perfume').value
    let pills = document.getElementById("pills").value
    let importedBoxChoc = document.getElementById("imported-box-chocolate").value
}
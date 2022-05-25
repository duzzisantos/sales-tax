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

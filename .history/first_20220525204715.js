//Variables for tax rate
let taxFree = 0;
let basicTax = 10;
let importDuty = 5;

//imported basic taxable items attract an extra non-negotiable tax rate of 5%, therefore 10% + 5% = 15%
let basicPlusImportDuty = basicTax + importDuty;

//An app that computes the first basket of goods
const basketOne = () => {
  let book = document.getElementById("book").value;
  let musicCD = document.getElementById("musicCD").value;
  let chocolateBar = document.getElementById("chocolateBar").value;

  // The plus sign is used in front of every variable to indicate to JavaScript that they are numerical values
  // Without this, they would become concatenated strings

  //these are the sums of the items and their taxes
  let bookPlusTax = +taxFree * +book + +book;
  let musicCDPlusTax = (basicTax * +musicCD) / 100 + +musicCD;
  let chocolateBarPlusTax = +taxFree * +chocolateBar + +chocolateBar;

  //this computes the total price paid by the customer
  let netPayment = +bookPlusTax + +musicCDPlusTax + +chocolateBarPlusTax;
  document.getElementById("total").value = netPayment.toFixed(2);

  //this computes the total sales tax generated
  let totalTaxes =
    bookPlusTax -
    book +
    (musicCDPlusTax - musicCD) +
    (chocolateBarPlusTax - chocolateBar);
  document.getElementById("sales-taxes").value = Math.ceil(
    (totalTaxes * 20) / 20
  ).toFixed(2);
};

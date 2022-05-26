//Variables for tax rate
let taxFree3 = 0;
let basicTax3 = 10;
let importDuty3 = 5;
let basicPlusImportDuty3 = basicTax3 + importDuty3;

//App that computes the third basket of goods
const basketThree = () => {
  let importedPerfume2 = document.getElementById("imported-perfume2").value;
  let bottlePerfume = document.getElementById("bottle-perfume").value;
  let pills = document.getElementById("pills").value;
  let importedChocolate2 = document.getElementById(
    "imported-box-chocolate2"
  ).value;

  //    // The plus sign is used in front of every variable to indicate to JavaScript that they are numerical values
  // Without this, they would become concatenated strings

  //these are the sums of the imported items and their taxes
  let importedPerfume2PlusTax =
    (basicPlusImportDuty3 * +importedPerfume2) / 100 + +importedPerfume2;
  let roundedImportedPerf2 = importedPerfume2PlusTax.toFixed(2);
  let bottlePerfumePlusTax =
    (basicTax3 * +bottlePerfume) / 100 + +bottlePerfume;
  let roundedBottlePerf = bottlePerfumePlusTax.toFixed(2);
  let pillsPlusTax = taxFree3 * +pills + +pills;
  let importedChocolate2PlusTax =
    (importDuty3 * +importedChocolate2) / 100 + +importedChocolate2;
  let roundedImportedChoc = (
    Math.ceil(importedChocolate2PlusTax * 20) / 20
  ).toFixed(2);

  //Math.ceil and toFixed method helps us round up to the nearest 0.05
  //This computes the prices plus their taxes

  let everyThing =
    +roundedImportedPerf2 +
    +roundedBottlePerf +
    +pillsPlusTax +
    +roundedImportedChoc;
  // let roundedPayment = (Math.ceil(netPayment * 20) / 20).toFixed(2);

  //this computes the total taxes generated from selling basket three
  let totalTaxes =
    +importedPerfume2PlusTax -
    +importedPerfume2 +
    (+bottlePerfumePlusTax - +bottlePerfume) +
    (+pillsPlusTax - +pills) +
    (+importedChocolate2PlusTax - +importedChocolate2);

  let roundedTaxes = (Math.ceil(totalTaxes * 20) / 20).toFixed(2);

  //Receipt
  const listThree = document.getElementById("listThree");
  listThree.innerHTML = `<br>1 imported bottle of perfume: ${roundedImportedPerf2}
  <br>1 bottle of perfume: ${roundedBottlePerf}<br>1 packet of headache pills: ${pillsPlusTax}
  <br>1 imported box of chocolate: ${roundedImportedChoc}
  <br>Sales Tax: ${roundedTaxes}<br><b>Total: ${everyThing}</b><br>`;
};

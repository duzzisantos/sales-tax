//Variables for tax rate
let basicTax2 = 10;
let importDuty2 = 5;

//imported basic taxable items attract an extra non-negotiable tax rate of 5%, therefore 10% + 5% = 15%
let basicPlusImportDuty2 = basicTax2 + importDuty2;

//An app that computes the second basket of goods
const basketTwo = () => {
  let importedChocolate = document.getElementById(
    "imported-box-chocolate"
  ).value;
  let importedPerfume2 = document.getElementById("imported-perfume").value;

  // The plus sign is used in front of every variable to indicate to JavaScript that they are numerical values
  // Without this, they would become concatenated strings

  //these are the sums of the imported items and their taxes
  let importedChocolatePlusTax =
    (importDuty2 * +importedChocolate) / 100 + +importedChocolate;
  let importedPerfume2PlusTax =
    (basicPlusImportDuty2 * +importedPerfume2) / 100 + +importedPerfume2;

  //Math.ceil and toFixed method helps us round up to the nearest 0.05
  //this computes the total price paid by the customer
  let netPayment = +importedChocolatePlusTax + +importedPerfume2PlusTax;
  let roundedPayment = (Math.ceil(netPayment * 20) / 20).toFixed(2);

  //this computes the total sales tax generated
  let totalTaxes =
    (importDuty2 * +importedChocolate) / 100 +
    (basicPlusImportDuty2 * +importedPerfume2) / 100;
  let roundedTaxes = (Math.ceil(totalTaxes * 20) / 20).toFixed(2);

  const listTwo = document.getElementById("listTwo")
  listTwo.innerHTML = `<br>1 imported box of chocolates:
   ${importedChocolatePlusTax}<br>1 imported bottle of perfume: ${importedPerfume2PlusTax}
   <br>Sales Taxes: ${roundedTaxes}<br><b>Total: ${roundedPayment}</b><br>`
};


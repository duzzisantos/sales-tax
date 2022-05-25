//Variables for tax rate
let basicTax2 = 10;
let importDuty2 = 5;

//imported basic taxable items attract an extra non-negotiable tax rate of 5%, therefore 10% + 5% = 15%
let basicPlusImportDuty2 = basicTax2 + importDuty2;

const basketTwo = () => {
    let importedChocolate = document.getElementById(
      "imported-box-chocolate"
    ).value;
    let importedPerfume2 = document.getElementById("imported-perfume").value;
  
    let importedChocolatePlusTax =
      (importDuty2 * +importedChocolate) / 100 + +importedChocolate;
    let importedPerfume2PlusTax =
      (basicPlusImportDuty2 * +importedPerfume2) / 100 + +importedPerfume2;
    console.log(importedChocolatePlusTax);
    console.log(importedPerfume2PlusTax);
  
    let netPayment = +importedChocolatePlusTax + +importedPerfume2PlusTax;
    document.getElementById("total2").value = netPayment.toFixed(2);
    let totalTaxes =
      (importDuty2 * +importedChocolate) / 100 +
      (basicPlusImportDuty2 * +importedPerfume2) / 100;
    document.getElementById("sales-taxes2").value = totalTaxes.toFixed(2);
  };
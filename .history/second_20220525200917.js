//Variables for tax rate
let basicTaxTwo = 10;
let importDuty2 = 5;
let basicPlusImportDuty2 = basicTaxTwo + importDuty2;

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
//Variables for tax rate
const taxFree = 0;
const basicTax = 10;
const importDuty = 5;
const basicPlusImportDuty = basicTax + importDuty;

const basketTwo = () => {
    let importedChocolate = document.getElementById(
      "imported-box-chocolate"
    ).value;
    let importedPerfume2 = document.getElementById("imported-perfume").value;
  
    let importedChocolatePlusTax =
      (importDuty * +importedChocolate) / 100 + +importedChocolate;
    let importedPerfume2PlusTax =
      (basicPlusImportDuty * +importedPerfume2) / 100 + +importedPerfume2;
    console.log(importedChocolatePlusTax);
    console.log(importedPerfume2PlusTax);
  
    let netPayment = +importedChocolatePlusTax + +importedPerfume2PlusTax;
    document.getElementById("total2").value = netPayment.toFixed(2);
    let totalTaxes =
      (importDuty * +importedChocolate) / 100 +
      (basicPlusImportDuty * +importedPerfume2) / 100;
    document.getElementById("sales-taxes2").value = totalTaxes.toFixed(2);
  };
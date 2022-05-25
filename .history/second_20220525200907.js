//Variables for tax rate
let basicTaxTwo = 10;
let importDutyTwo = 5;
let basicPlusImportDutyTwo = basicTaxTwo + importDutyTwo;

const basketTwo = () => {
    let importedChocolate = document.getElementById(
      "imported-box-chocolate"
    ).value;
    let importedPerfume2 = document.getElementById("imported-perfume").value;
  
    let importedChocolatePlusTax =
      (importDutyTwo * +importedChocolate) / 100 + +importedChocolate;
    let importedPerfume2PlusTax =
      (basicPlusImportDutyTwo * +importedPerfume2) / 100 + +importedPerfume2;
    console.log(importedChocolatePlusTax);
    console.log(importedPerfume2PlusTax);
  
    let netPayment = +importedChocolatePlusTax + +importedPerfume2PlusTax;
    document.getElementById("total2").value = netPayment.toFixed(2);
    let totalTaxes =
      (importDutyTwo * +importedChocolate) / 100 +
      (basicPlusImportDutyTwo * +importedPerfume2) / 100;
    document.getElementById("sales-taxes2").value = totalTaxes.toFixed(2);
  };
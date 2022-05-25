//Variables for tax rate
let taxFree3 = 0;
let basicTax3 = 10;
let importDuty3 = 5;
let basicPlusImportDuty3 = basicTax3 + importDuty3;

const basketThree = () => {
    let importedPerfume2 = document.getElementById("imported-perfume2").value;
    let bottlePerfume = document.getElementById("bottle-perfume").value;
    let pills = document.getElementById("pills").value;
    let importedChocolate2 = document.getElementById("imported-box-chocolate2").value;
  
    let importedPerfume2PlusTax = (basicPlusImportDuty3 * +importedPerfume2) / 100 + +importedPerfume2;
    let bottlePerfumePlusTax =
      (basicTax3 * +bottlePerfume) / 100 + +bottlePerfume;
    let pillsPlusTax = (taxFree3 * +pills) + +pills;
    let importedChocolate2PlusTax =
      (importDuty3 * +importedChocolate2) / 100 + +importedChocolate2;
  
    let netPayment =
      importedPerfume2PlusTax +
      bottlePerfumePlusTax +
      pillsPlusTax +
      importedChocolate2PlusTax;
    document.getElementById("total3").value = netPayment.toFixed(2);
    let totalTaxes =
      importedPerfume2PlusTax -
      importedPerfume2 +
      (bottlePerfumePlusTax - bottlePerfume) +
      (pillsPlusTax - pills) +
      (importedChocolate2PlusTax - importedChocolate2);
    document.getElementById("sales-taxes3").value = totalTaxes.toFixed(2);
  };
  
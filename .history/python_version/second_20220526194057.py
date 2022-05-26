import math

# Basket Two
importedBoxOfChocolates = 10.00
importedBottleOfPerfume = 47.50

#Tax rates
basicTax = 10
importDuty = 5
basicPlusImport = 15
noTax = 0

# Basket Two Application
def basketTwo():
    # Input and output logic
    input("1 imported box of chocolates at: ")
    importedBoxOfChocolatesPlusTax = (
        (importDuty * importedBoxOfChocolates) / 100) + importedBoxOfChocolates
    input("1 imported bottle of perfume at: ")
    importedBottleOfPerfumePlusTax = (
        (basicPlusImport * importedBottleOfPerfume) /
        100) + importedBottleOfPerfume
    perfPlusTaxRounded = float(format(
        (math.ceil(importedBottleOfPerfumePlusTax * 20) / 20), ".2f"))

    # Tax added up and rounded to the nearest 0.05 using math.ceil and format(".2f") methods

    sumOfTaxes2 = ((importedBoxOfChocolatesPlusTax - importedBoxOfChocolates) +
                   (importedBottleOfPerfumePlusTax - importedBottleOfPerfume))
    salesTaxRounded2 = float(format((math.ceil(sumOfTaxes2 * 20) / 20), ".2f"))

    # Total payment rounded and formatted as above

    totalPayment2 = importedBottleOfPerfumePlusTax + importedBoxOfChocolatesPlusTax
    paymentRounded2 = format((math.ceil(totalPayment2 * 20) / 20), ".2f")

    ## Print receipt

    print("\n BASKET TWO RECEIPT")
    print("1 imported box of chocolates: ", importedBoxOfChocolatesPlusTax)
    print("1 imported bottle of perfume: ", perfPlusTaxRounded)
    print("Sales Taxes: ", salesTaxRounded2)
    print("Total: ", paymentRounded2)


basketTwo()

##########################################
import math

# Basket Three
importedBottleOfPerfume2 = 27.99
bottleOfPerfume = 18.99
packetOfHeadachePills = 9.75
importedBoxOfChocolates2 = 11.25

#Tax rates
basicTax = 10
importDuty = 5
basicPlusImport = 15
noTax = 0

## Basket Three Application


def basketThree():
    #input and output logic
    # first item
    input("1 imported bottle of perfume at 27.99: ")
    importedBottleOfPerfume2PlusTax = (
        (basicPlusImport * importedBottleOfPerfume2) /
        100) + importedBottleOfPerfume2
    roundedImportedPerfume2 = format(importedBottleOfPerfume2PlusTax, ".2f")

    # second item
    input("1 bottle of perfume at 18.99: ")
    bottleOfPerfumePlusTax = (
        (basicTax * bottleOfPerfume) / 100) + bottleOfPerfume
    roundedBottlePerfume = format(bottleOfPerfumePlusTax, ".2f")

    # third item
    input("1 packet of headache pills at 9.75: ")
    packetOfHeadachePillsPlusTax = (
        (noTax * packetOfHeadachePills) / 100) + packetOfHeadachePills

    # fourth item
    input("1 box of imported chocolates at 11.25: ")
    importedBoxOfChocolates2PlusTax = (
        (importDuty * importedBoxOfChocolates2) /
        100) + importedBoxOfChocolates2
    roundedImportedChoc = float( format(
        (math.ceil(importedBoxOfChocolates2PlusTax * 20) / 20), ".2f"))

    # Total taxes rounded up to the nearest 0.05

    salesTaxes3 = (
        (importedBottleOfPerfume2PlusTax - importedBottleOfPerfume2) +
        (bottleOfPerfumePlusTax - bottleOfPerfume) +
        (packetOfHeadachePillsPlusTax - packetOfHeadachePills) +
        (importedBoxOfChocolates2PlusTax - importedBoxOfChocolates2))

    salesTaxRounded3 = format((math.ceil(salesTaxes3 * 20) / 20), ".2f")

    # Total payment rounded up to the nearest 0.05
    item1 = float(roundedImportedPerfume2)
    item2 = float
    totalPayment3 = roundedBottlePerfume + roundedBottlePerfume + packetOfHeadachePillsPlusTax + roundedBottlePerfume
    paymentRounded3 = format((math.ceil(totalPayment3 * 20) / 20), ".2f")

    # Print receipt

    print("\n BASKET THREE RECEIPT")
    print("1 imported bottle of perfume: ", roundedImportedPerfume2)
    print("1 bottle of perfume: ", roundedBottlePerfume)
    print("1 packet of headache pills: ", packetOfHeadachePillsPlusTax)
    print("1 box of imported chocolates: ", roundedImportedChoc)
    print("Sales Taxes: ", salesTaxRounded3)
    print("Total: ", paymentRounded3)


basketThree()
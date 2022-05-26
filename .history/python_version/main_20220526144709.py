import math

# Basket One
book = 12.49
musicCD = 14.99
chocolateBar = 0.85

# Basket Two
importedBoxOfChocolates = 10.00
importedBottleOfPerfume = 47.50

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


def basketOne():
    input("1 book at 12.49: ")
    print("1 book: ", ((noTax * book) + book))
    input("1 music CD at 14.99: ")
    print("1 music CD: ", ((basicTax * musicCD) / 100) + musicCD)
    input("1 chocolate bar at 0.85: ")
    print("1 chocolate bar: ", ((noTax * chocolateBar) / 100) + chocolateBar)

basketOne()
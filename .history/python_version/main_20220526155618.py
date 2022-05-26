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


## Basket One Application
def basketOne():
    # Inputs and output logic
    input("1 book at 12.49: ")
    bookPlusTax = ((noTax * book) / 100) + book
    input("1 music CD at 14.99: ")
    musicCDplusTax = ((basicTax * musicCD) / 100) + musicCD
    input("1 chocolate bar at 0.85: ")
    chocolateBarPlusTax = ((noTax * chocolateBar) / 100) + chocolateBar

    # Taxes added up - tax contribution removed tax value from total price
    sumOfTaxes = ((bookPlusTax - book) + (musicCDplusTax - musicCD) +
                  (chocolateBarPlusTax - chocolateBar))

    # math.ceil and format(".2f") helps us to round up the nearest 0.05
    salesTaxRounded = format((math.ceil(sumOfTaxes * 20) / 20), ".2f")
    totalPayment = bookPlusTax + musicCDplusTax + chocolateBarPlusTax
    paymentRounded = format(totalPayment, ".2f")

    # Prints receipt
    print("\n BASKET ONE RECEIPT")
    print("1 book: ", bookPlusTax)
    print("1 music CD: ", format(musicCDplusTax, ".2f"))
    print("1 chocolate bar: ", chocolateBarPlusTax)
    print("Sales Taxes: ", salesTaxRounded)
    print("Total: ", paymentRounded)


basketOne()

#############################################


# Basket Two Application
def basketTwo():
    # Input and output logic
    input("1 imported box of chocolates at 10.00: ")
    importedBoxOfChocolatesPlusTax = (
        (importDuty * importedBoxOfChocolates) / 100) + importedBoxOfChocolates
    input("1 imported bottle of perfume at 47.50: ")
    importedBottleOfPerfumePlusTax = (
        (basicPlusImport * importedBottleOfPerfume) /
        100) + importedBottleOfPerfume
    perfPlusTaxRounded = format(
        (math.ceil(importedBottleOfPerfumePlusTax * 20) / 20), ".2f")

    # Tax added up and rounded to the nearest 0.05 using math.ceil and format(".2f") methods

    sumOfTaxes2 = ((importedBoxOfChocolatesPlusTax - importedBoxOfChocolates) +
                   (importedBottleOfPerfumePlusTax - importedBottleOfPerfume))
    roundedTax = format((math.ceil(sumOfTaxes2 * 20) / 20), ".2f")

    # Total payment rounded and formatted as above

    totalPayment2 = importedBottleOfPerfumePlusTax + importedBoxOfChocolatesPlusTax
    paymentRounded2 = format((math.ceil(totalPayment2 * 20) / 20), ".2f")

    ## Print receipt

    print("\n BASKET TWO RECEIPT")
    print("1 imported box of chocolates: ", importedBoxOfChocolatesPlusTax)
    print("1 imported bottle of perfume: ", perfPlusTaxRounded)
    print("Sales Taxes: ", roundedTax)
    print("Total: ", paymentRounded2)


basketTwo()

##########################################

## Basket Three Application

def basketThree():
   #input and output logic
   input("1 imported bottle of perfume at 27.99: ")
   importedBottleOfPerfume2PlusTax = ((basicPlusImport * importedBottleOfPerfume2) / 100) + importedBottleOfPerfume2
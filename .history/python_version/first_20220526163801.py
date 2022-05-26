import math

# Basket One
book = 12.49
musicCD = 14.99
chocolateBar = 0.85

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
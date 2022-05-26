#Define tax rates

taxRates = {
    "basicTax": 10,
    "importDuty": 5,
    "basicTaxPlusImportDuty": 15
}

firstBasket = [
    {
        "id": 1,
        "product": "book",
        "price": 12.49,
        "isTaxable": False,
        "isImported": False,
    },
    {
       "id": 2,
       "product": "music_CD",
       "price": 14.99,
       "isTaxable": True,
       "isImported": False
    },
    {
        "id": 3,
        "product": "chocolate_bar",
        "price": 0.85,
        "isTaxable": False,
        "isImported": False
    }

]
def basketOne(book, musicCD, chocolateBar):
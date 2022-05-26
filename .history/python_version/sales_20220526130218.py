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
        "isBasicTaxable": False,
        "isImported": False,
    },
    {
       "id": 2,
       "product": "music_CD",
       "price": 14.99,
       "isBasicTaxable": True,
       "isImported": False
    },
    {
        "id": 3,
        "product": "chocolate_bar",
        "price": 0.85,
        "isBasicTaxable": False,
        "isImported": False
    }
]

secondBasket = [
    {
        "id": 1,
        "product": "imported_box_of_chocolates",
        "price": 10.00,
        "isBasicTaxable": False,
        "isImported": True
    },
    {
        "id": 2,
        "product": "imported_bottle_of_perfume",
        "price": 47.50,
        "isBasicTaxable": True,
        "isImported": True
    }
]

thirdBasket = [
    {
        "id": 1,
        "product": "imported_bottle_of_perfume",
        "price": 27.99,
        ""
    }
]

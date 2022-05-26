#Define tax rates

## This was used as a guide to the rules of the application. It contains the price, product name and product categories
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
        "isBasicTaxable": True,
        "isImported": True
    },
    {
        "id": 2,
        "product": "bottle_of_perfume",
        "price": 18.99,
        "isBasicTaxable": True,
        "isImported": False
    },
    {
        "id": 3,
        "product": "packet_of_headache_pills",
        "price": 9.75,
        "isBasicTaxable": False,
        "isImported": False
    },
    {
        "id": 4,
        "product": "box_of_imported_chocolates",
        "price": 11.25,
        "isBasicTaxable": False,
        "isImported": True
    }
]




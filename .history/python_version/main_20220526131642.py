import sales

#Function for Basket of goods 1


def basketOne():
    for basket in sales.firstBasket:
        if basket.product == "book":
            print(basket.price)

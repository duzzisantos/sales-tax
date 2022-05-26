import sales

#Function for Basket of goods 1


def basketOne():
    for basket in sales.firstBasket:
        if basket[0].product == "book":
            print(basket.price)



# print(sales.firstBasket)
# print(sales.firstBasket[1])
# print(sales.firstBasket[2])
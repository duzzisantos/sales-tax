price1 = float(12.49)
price2 = float(14.99)

x = input("1 book at {price1}: ")
if x == price1:
    print("1 book: ", x * 0)
elif x == price2:
    print("1 music CD: ", ((10 * x) / 100) + x)

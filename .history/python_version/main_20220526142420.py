price1 = float(12.49)
price2 = float(14.99)

x = input("1 book at 12.49: ")
y = input("1 music CD at 14.99: ")
if x == price1:
    print("1 book: ", (0 * x) + x)
elif y == price2:
    print("1 music CD: ", ((10 * x) / 100) + x)

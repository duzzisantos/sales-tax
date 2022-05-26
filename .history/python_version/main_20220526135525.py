from sales import book, musicCD, chocolateBar, importedBoxOfChocolates, importedBottleOfPerfume, importedBottleOfPerfume2, bottleOfPerfume, packetOfHeadachePills, boxOfImportedChocolates

#Basket of goods 1

def basketOne():
    if book["isTaxable"] == True and book["isImported"] == False:
        print(book["price"])

basketOne()



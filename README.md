# Sales Tax
This application calculates sales tax for three baskets of goods.

 ## Basket One
  - 1 book at 12.49
  - 1 music CD at 14.99
  - 1 chocolate bar at 0.85

 ## Basket Two
  - 1 imported box of chocolates at 10.00
  - 1 imported bottle of perfume at 47.50

 ## Basket Three
  - 1 imported bottle of perfume at 27.99
  - 1 bottle of perfume at 18.99
  - 1 packet of headache pills at 9.75
  - 1 box of imported chocolates at 11.25

 # Expected Output
 
  ## Output 1
   - 1 book: 12.49
   - 1 music CD: 16.49
   - 1 chocolate bar: 0.85
   - Sales Taxes: 1.50
   - Total: 29.83

  ## Output 2
   - 1 imported box of chocolates: 10.50
   - 1 imported bottle of perfume: 54.65

  ## Output 3
   - 1 imported box of chocolates: 10.50
   - 1 imported bottle of perfume: 54.65
   - 1 packet of headache pills: 9.75
   - 1 imported box of chocolates: 11.85
   - Sales Taxes: 6.70
   - Total: 74.68
    
  # Sales tax rules
  Items such as books, medication and food are exempt from taxes. Unless they are    imported, then a customary import duty of 5% is charged. Other items like perfumes and music CDs attract 10% tax. If they are imported, then they would incur an extra import duty of 5% - totalling 15%.

# Tools used
 # Programming languages
  - JavaScript
  - Python
 # Other langauges
  - CSS
  - HTML
# JavaScript Version of the application
  ## Content
  - HTML inputs are used to collect integer values, so that when the document.getElementById method is called, we can extract the values from the input elements.
  - Each input element with its value is declared as a variable, so that when math operations like  /, +, * or - perfomed, the user can see the results displayed on the receipt area.
  - Tax plus original price is rounded to the nearest 0.05 using the Math.ceil() method and the toFixed() method. In this case, toFixed(2), to round to two decimal places. 
  - Performing any calculation requires that the variables for the various tax conditions are stated( basic tax = 10%, import duty = 5%, basic tax + import duty = 15%, no tax = 0).
  - For every tax calculation, the program multiplies the tax rate by the product price all over 100: that is tax contribution = (tax rate * product price) / 100. Add this to the original price, and we have the gross price.
  - The total sales tax calculates all the individual sales taxes
  - The total price is the sum of all the the indicidual gross prices per item in the goods basket. 

menu = ["Americano", "Espresso", "Hot Chocolate", "Tea", "Latte"]
select_msg = "Please select a drink below by typing in its corresponding number:"

prices = {1.50, 2.00, 2.50, 3.00, 3.50}
'''


for i in range(5)
	TODO:
	using either a for loop or doing everything
	manually, insert all the drinks in "menu"
	with their correspinding prices (see below)
	into the "prices" dictionary.
	Americano: $2.50
	Espresso: $1.50
	Hot Chocolate: $3.00
	Tea: $2.00
	Latte: $3.50
'''

def print_options():
	print("You have the following options:")
	'''
		TODO:
		Print to the user the following options:
		1: view menu
		2: order a drink
		3: checkout
		OPTIONAL:
		Make sure that the user types in a valid input,
		otherwise this program will break in the event
		of a bad input. I call these precautionary
		measures "stupid-proofing"
	'''
	option = int(input("What would you like to do? "))
	return option


def print_menu():
	'''
		TODO:
		using a for loop, nicely print out every
		item inside the "menu" list, so that the output
		looks exactly like this:
		Americano
		Espresso
		Hot Chocolate:
		Tea
		Latte
		Once implemented, please remove the "pass" statement at
		the end of the function
	'''
	pass

total = 0
print("Hello, and welcome to Roman Kiosk!")
while True:
	choice = print_options()
	'''
		TODO:
		Okay, this is the bulk of the control flow in the
		program. Id choice is 1, use print_menu. If
		choice is 2, then prompt the user for what drink
		they would like and add its price to "total". Finally,
		if choice is 3, then add a 10 percent tax to the total price
		and show the user their total price, AND DON'T FORGET TO ADD
		A BREAK STATEMENT THEN, OTHERWISE THE PROGRAM WILL GO ON FOREVER.
	'''
print("Thank you, please come again!")






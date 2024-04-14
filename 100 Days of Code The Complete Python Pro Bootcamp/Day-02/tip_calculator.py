print("Welcome to the tip calculator")
bill = float(input("What was the total bill? $"))
tips = int(input("What percentage tip would you like to give? 10, 12, or 15? "))
people = int(input(("How many people would like to split the bill? ")))
tip = tips / 100 * bill
bill = bill + tip
bill_per_person =  bill / people
total_bill = round(bill_per_person, 2)
total_bill = "{:.2f}".format(bill_per_person)
print(f"Each person should pay: {total_bill}")

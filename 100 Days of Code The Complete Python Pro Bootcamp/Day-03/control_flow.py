# Exercise (odd or even)

# Write a program that works out whether if a given number is an odd or even number.

# Even numbers can be divided by 2 with no remainder.

# e.g. 86 is even because 86 ÷ 2 = 43

# 43 does not have any decimal places. Therefore the division is clean.

# e.g. 59 is odd because 59 ÷ 2 = 29.5

# 29.5 is not a whole number, it has decimal places. Therefore there is a remainder of 0.5, so the division is not clean.

# The modulo is written as a percentage sign (%) in Python. It gives you the remainder after a division.

# e.g.

# 6 ÷ 2 = 3 with no remainder.

# therefore: 6 % 2 = 0

# 5 ÷ 2 = 2 x 2 + 1, remainder is 1.

# therefore: 5 % 2 = 1

# 14 ÷ 4 = 3 x 4 + 2, remainder is 2.

# therefore: 14 % 4 = 2

# Warning your output should match the Example Output format exactly, even the positions of the commas and full stops.

# Example 1 Input
# 43
# Example 1 Output
# This is an odd number.
# Example 2 Input
# 94
# Example 2 Output
# This is an even number.


# Which number do you want to check?
# number = int(input())
# 🚨 Don't change the code above 👆


# Write your code below this line 👇
# even_number = number % 2 == 0
# if(even_number):
#     print('This is an even number.')
# else:
#     print('This is an odd number.')

# Exercise - Control Flow (Leap year)

# Which year do you want to check?
# year = int(input())
# # 🚨 Don't change the code above 👆
# if year % 4 == 0 and year % 100  != 0 or year % 400 == 0:
#     print(f'Year {year} is a leap year')
# else:
#     print(f"Year {year} isn't a leap year")

# Exercise 11 - Control Flow
# Python Pizza Delivery
# Instructions

# Congratulations, you've got a job at Python Pizza! Your first job is to build an automatic pizza order program.

# Based on a user's order, work out their final bill.

# Small pizza (S): $15

# Medium pizza (M): $20

# Large pizza (L): $25

# Add pepperoni for small pizza (Y or N): +$2

# Add pepperoni for medium or large pizza (Y or N): +$3

# Add extra cheese for any size pizza (Y or N): +$1

# Example Input
# L
# Y
# N
# Example Output
# Thank you for choosing Python Pizza Deliveries!
# Your final bill is: $28.

print("Thank you for choosing Python Pizza Deliveries!")
size = input()  # What size pizza do you want? S, M, or L
add_pepperoni = input()  # Do you want pepperoni? Y or N
extra_cheese = input()  # Do you want extra cheese? Y or N
# 🚨 Don't change the code above 👆
# Write your code below this line 👇
bill = 0


if size == "S":
    bill = 15
    if add_pepperoni == "Y":
        bill += 2
    if extra_cheese == "Y":
        bill += 1
        print(f"Your final bill is : ${bill}.")
    else:
            print(f"Your final bill is : ${bill}.")

elif size == "M":
    bill = 20
    if add_pepperoni == "Y":
        bill += 3
    if extra_cheese == "Y":
        bill += 1
        print(f"Your final bill is : ${bill}.")
    else:
        print(f"Your final bill is : ${bill}.")

elif size == "L":
    bill = 25
    if add_pepperoni == "Y":
        bill += 3
    if extra_cheese == "Y":
        bill += 1
        print(f"Your final bill is : ${bill}")
    else:
        print(f"Your final bill is : ${bill}.")

else:
    print(f"Your final bill is : ${bill}.")

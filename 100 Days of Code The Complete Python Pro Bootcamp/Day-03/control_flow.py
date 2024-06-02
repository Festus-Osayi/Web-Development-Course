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

"""print("Thank you for choosing Python Pizza Deliveries!")
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
"""

"""
💪 This is a difficult challenge! 💪
You are going to write a program that tests the compatibility between two people.

To work out the love score between two people:

Take both people's names and check for the number of times the letters in the word TRUE occurs.

Then check for the number of times the letters in the word LOVE occurs.

Then combine these numbers to make a 2 digit number.

For Love Scores less than 10 or greater than 90, the message should be:

"Your score is *x*, you go together like coke and mentos."
For Love Scores between 40 and 50, the message should be:

"Your score is *y*, you are alright together."
Otherwise, the message will just be their score. e.g.:

"Your score is *z*."
e.g.

name1 = "Angela Yu"
name2 = "Jack Bauer"
T occurs 0 times

R occurs 1 time

U occurs 2 times

E occurs 2 times

Total = 5

L occurs 1 time

O occurs 0 times

V occurs 0 times

E occurs 2 times

Total = 3

Love Score = 53

Print: "Your score is 53."
"""

# print("The Love Calculator is calculating your score...")
# name1 = input()  # What is your name?
# name2 = input()  # What is their name?
# # # 🚨 Don't change the code above 👆
# # # Write your code below this line 👇


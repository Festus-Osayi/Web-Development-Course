# Exercise - Data Types

# Write a program that adds the digits in a 2 digit number. e.g. if the input was 35, then the output should be 3 + 5 = 8

# Warning. Do not change the code on line 1. Your program should work for different inputs. e.g. any two-digit number.

# The last line of your program should print the result.

# Example 1 Input
# 39

# Example 1 Output
# 12
# Example 2 Input
# 43

# Example 2 Output
# 7

two_digit_number = input()
# 🚨 Don't change the code above 👆
####################################
# Write your code below this line 👇

# take both string indexes and convert to number
first_digit = int(two_digit_number[0])
second_digit = int(two_digit_number[1])

# add the two the digit number
two_digit_number = first_digit + second_digit
print(two_digit_number)

print(3 * (3 + 3 / 3 - 3))


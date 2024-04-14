name = "Jack"  # jack to the variable name
print(name)  # Jack
name = "Festus"  # reassigning the name "Festus" to the name variable
print(name)  # Festus

# Exercise - Variables
# This program takes two inputs. The first input is stored in a variable called a. The second input is stored in a variable called b.
# Write a program that switches the values stored in the variables a and b.
# Warning . You don't need to print anything. The print statement is already in the template code. However, your program should work for different inputs. e.g. any value of a and b.
# Example Input 1
# 29
# 41
# Example Output 1
# a: 41
# b: 29

# There are two variables, a and b from input
a = input()
b = input()
# 🚨 Don't change the code above ☝️
####################################
# Write your code below this line 👇

# Solution 1
# a, b = b, a # This assign the (a --> b) and (b --> a)
# Solution 2 (most common)
c = a  # c --> a
a = b  # a --> b
b = c  # b --> c (equivalent to the value of a)

# 🚨 Don't change the code below 👇
print("a: " + a)
print("b: " + b)


# Last exercise of 100 days of python code
# 1. Create a greeting for your program.
print("Welcome to the Band Name Generator")

# 2. Ask the user for the city that they grew up in.
city_name = input("What's the name of the city you grew up in?\n")
print(city_name)
# 3. Ask the user for the name of a pet.
pet_name = input("what's your pet name?\n")
print(pet_name)
# 4. Combine the name of their city and pet and show them their band name.
print("Your band name could be {} {}".format(city_name, pet_name))
# 5. Make sure the input cursor shows on a new line:

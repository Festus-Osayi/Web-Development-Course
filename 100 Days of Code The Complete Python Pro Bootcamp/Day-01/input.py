# input functionality in python
# print hello and the user's name....
print("Hello " + input("What's your name? ") + "!")

# Exercise
# Try this exercise to understand how tests work with inputs. Write some code that multiples together the two numbers in the input area. When you run the tests, different inputs will replace the ones in the input area and pass the new inputs through your code.

num1 = int(input())
num2 = int(input())
print(num1 * num2)

# Provide any name in the input pane below.
# That value can be accessed using the input() function.
# Don't put anything inside the input() function!
name = input()      # get the input value
print(len(name))    # print the length of the name with the "len()" method

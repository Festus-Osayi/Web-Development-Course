year = int(input())
# 🚨 Don't change the code above 👆
if year % 4 == 0 and year % 100  != 0 or year % 400 == 0:
    print(f'Year {year} is a leap year')
else:
    print(f"Year {year} isn't a leap year")
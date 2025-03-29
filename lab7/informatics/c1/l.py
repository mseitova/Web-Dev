binary_number = input()

decimal_number = 0


for i in range(len(binary_number)):
    decimal_number += int(binary_number[i]) * (2 ** (len(binary_number) - i - 1))

print(decimal_number)

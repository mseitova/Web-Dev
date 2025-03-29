import math

N = int(input())

for i in range(1, int(math.sqrt(N)) + 1):
    square = i * i
    if square <= N:
        print(square)
    else:
        break  
import math

x = int(input())


divisors_count = 0
sqrt_x = int(math.sqrt(x))  
for i in range(1, sqrt_x + 1):
    if x % i == 0:
        divisors_count += 2  

if sqrt_x * sqrt_x == x:
    divisors_count -= 1

print(divisors_count)

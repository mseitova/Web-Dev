N = int(input())

while N > 1 and N % 2 == 0:
    N //= 2

if N == 1:
    print("YES")
else:
    print("NO")
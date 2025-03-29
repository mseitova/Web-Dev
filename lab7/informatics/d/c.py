n = int(input())

arr = list(map(int,input().split()))

cnt = 0 

for num in arr:
    if num > 0:
        cnt += 1
print(cnt)
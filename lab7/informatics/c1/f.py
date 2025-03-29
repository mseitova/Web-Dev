num = int(input())

rev_num = ""


while num > 0:
    rev_num += str(num%10)
    num = num // 10
print(rev_num)
    
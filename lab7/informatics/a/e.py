v = int(input())
t = int(input())

s = v * t

if v > 0 :
    pos = s % 109

else:
    pos = 109 - ((-s) % 109)

print(pos)
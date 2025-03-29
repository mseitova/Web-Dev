correct_answer = int(input())
student_answer = int(input())

if correct_answer == 1 and student_answer != 1:
    print("NO")

elif correct_answer != 1 and student_answer == 1:
    print("NO")

else:
    print("YES")
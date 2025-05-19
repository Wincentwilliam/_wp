def average(number):
    if not number:
        return 0.0 
    return round(sum(number) / len(number), 1)

print(average([1, 2, 3, 4, 5]))  
def find_max(Numbers):
    max = Numbers[0]
    for num in Numbers:
        if num > max:
            max = num
    return max
    
print(find_max([3, 7 , 2 , 9, 5]))
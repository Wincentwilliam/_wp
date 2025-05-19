def most_common(nums):
    count_dict = {}
    for num in nums:
        count_dict[num] = count_dict.get(num, 0) + 1

    max_count = 0
    most_common_num = None
    for num, count in count_dict.items():
        if count > max_count:
            max_count = count
            most_common_num = num

    return most_common_num

# Example usage:
print(most_common([1, 2, 2, 3, 3, 3, 4]))  # Output: 3

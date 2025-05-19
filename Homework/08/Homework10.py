def summary(data):
    for student in data:
        name = student['name']
        scores = student['scores']
        total = sum(scores)
        average = total / len(scores) if scores else 0
        print(f"{name}: Total = {total}, Average = {average:.1f}")

# Example usage:
students = [
    {'name': 'Alice', 'scores': [90, 80, 70]},
    {'name': 'Bob', 'scores': [100, 85, 95]}
]

summary(students)

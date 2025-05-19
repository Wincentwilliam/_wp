def print_stars(n):
    for i in range(1, n + 1):
        line = ''
        for _ in range(i):
            line += '*'
        print(line)

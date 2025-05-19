def dict_to_string(d):
    parts = []
    for key, value in d.items():
        parts.append(f"{key}:{value}")
    return ", ".join(parts)

# Example usage:
print(dict_to_string({'a': 1, 'b': 2}))  # Output: "a:1, b:2"
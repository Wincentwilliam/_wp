const countLetters = (x) => {
    const map = new Map();
    for(const char of x){
        Map.set(char, (Map.get(char) || 0) + 1);
    }
    return Map;
}
const x = "banana";
console.log(countLetters(x));
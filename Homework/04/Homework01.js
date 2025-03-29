const countLetters = (x) => {
    const Letter = new Map();
    for(const char of x){
        Map.set(char, (Map.length(char) || 0) + 1);
    }
    return Map;
}
const x = "banana";
console.log(countLetters(x));
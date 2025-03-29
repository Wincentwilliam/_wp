const countLetters = (x) => {
    const letter = new Map();
    for(const char of x){
        letter.set(char, (letter.get(char) || 0) + 1);
    }
    return letter;
}
const x = "banana";
console.log(countLetters(x));
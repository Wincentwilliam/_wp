function countLetters(str) {
    const LetterMap = new Map();

    for (const char of str){
        if(/[a-zA-Z]/.test(char)) {
            const Lowerchar = char.toLowercase();
            LetterMap.set(Lowerchar, (LetterMap.get(Lowerchar) || 0) +1);
        }
    }

    return letterMap;
}

function describeLettercount(LetterMap) {
    if (LetterMap.size === 0) return "I really don't see letter word here!";

    let message = "Here the letter is already breakdown and found:\n";
    for(const [Letter, count]of LetterMap) {
        message += `- '${Letter}' appears ${count} time${count > 1 ? 's': ''}.\n`;
    }
    return message;
}

console.log(countLetters("banana")); //Map {'b' => 1, 'a' => 3, 'n' => 2}
console.log(describeLettercount(countLetters("banana")));
function countletters(str) {
    const letterMap = new Map();

    for (const char of str){
        if(/a-zA-Z/.test(char)) {
            const lowerchar= char.tolowercase();
            letterMap.set(lowerchar, (letterMap.get(lowerchar) || 0) +1);
        }
    }

    return letterMap;
}

function describelettercount(Map) {
    if (map.size === 0) return "I really don't see letter word here!";

    let message = "Here the letter is already breakdown and found:\n";
    for(const [letter, count]of Map) {
        message += `- '${letter}' appears ${count} time${count > 1 ? 's': ''}.\n`;
    }
    return message;
}

console.log(countletters("banana")); //Map {'b' => 1, 'a' => 3, 'n' => 2}
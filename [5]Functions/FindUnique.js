function findFirstUniqueCharacter(str) {
const charMap = {};
    for (let i = 0; i < str.length; i++) {
        const char = str[i];
        if (charMap[char]) {
            charMap[char]++;
        } else {
            charMap[char] = 1;
        }
    }
    for (let i = 0; i < str.length; i++) {
        const char = str[i];
        if (charMap[char] === 1) {
            return char;
        }
    }

    return null;
}
const str = "aabccde";
const firstUniqueChar = findFirstUniqueCharacter(str);
console.log(`Первый неповторяющийся символ: ${firstUniqueChar}`);

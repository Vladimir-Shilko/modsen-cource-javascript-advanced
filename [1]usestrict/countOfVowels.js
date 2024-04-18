'use strict';

function countVowels(str) {
    let vowelsCount = 0;
    const vowels = ['a', 'e', 'i', 'o', 'u'];

    for (let i = 0; i < str.length; i++) {
        const char = str[i].toLowerCase();
        if (vowels.includes(char)) {
            vowelsCount++;
        }
    }

    return vowelsCount;
}

// Пример использования:
const inputString = 'Hello, World!';
const result = countVowels(inputString);
console.log(`Количество гласных букв: ${result}`);
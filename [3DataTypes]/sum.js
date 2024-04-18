function sumFirstAndLastDigit(number) {
    const numberString = number.toString(); // Преобразуем число в строку
    const firstDigit = parseInt(numberString[0]); // Парсим первую цифру в число
    const lastDigit = parseInt(numberString[numberString.length - 1]); // Парсим последнюю цифру в число
    const sum = firstDigit + lastDigit; // Вычисляем сумму

    console.log(`Сумма первой и последней цифры числа ${number} равна: ${sum}`);
}

// Пример использования:
sumFirstAndLastDigit(12345); // Сумма первой и последней цифры числа 12345 равна: 6
sumFirstAndLastDigit(987654321); // Сумма первой и последней цифры числа 987654321 равна: 10
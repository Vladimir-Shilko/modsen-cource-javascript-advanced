function sumOfSquares(numbers) {
    let sum = 0;

    for (let i = 0; i < numbers.length; i++) {
        const square = numbers[i] ** 2;
        sum += square;
    }

    return sum;
}

// Пример использования:
const array = [1, 2, 3, 4, 5];
const result = sumOfSquares(array);
console.log(`Сумма квадратов элементов массива: ${result}`);
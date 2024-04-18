function divideNumbers(a, b) {
    if (b === 0) {
        throw new Error("Деление на ноль недопустимо");
    }

    return a / b;
}

// Пример использования:
try {
    const result = divideNumbers(10, 0);
    console.log(`Результат деления: ${result}`);
} catch (error) {
    console.error(error.message);
}
function generateRandomDelay() {
    return new Promise((resolve, reject) => {
        const randomNumber = Math.floor(Math.random() * 10) + 1;

        setTimeout(() => {
            if (randomNumber >= 1 && randomNumber <= 5) {
                resolve(randomNumber);
            } else {
                reject(new Error(`Ошибка: сгенерировано число ${randomNumber}`));
            }
        }, randomNumber * 1000);
        console.log('code after timeout ')
    });

}

// Пример использования:
generateRandomDelay()
    .then(result => {
        console.log("Промис выполнен успешно. Сгенерированное число:", result);
    })
    .catch(error => {
        console.error(error.message);
    });
console.log('code after function with promise')
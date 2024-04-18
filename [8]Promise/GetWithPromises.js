function fetchDataFromAPI(url) {
    return new Promise((resolve, reject) => {
        //get random time for each request
        const randomTime = Math.random() * 1000;
        // Имитация асинхронного запроса к API
        setTimeout(() => {
            const data = url[url.length-1]
            resolve(data);
        }, randomTime); // Имитация задержки запроса в 2 секунды
    });
}

function fetchMultipleAPIs(apiUrls) {
    const promises = apiUrls.map(url => fetchDataFromAPI(url));

    return Promise.all(promises)
        .then(results => {
            // Объединение результатов в один объект или массив
            // В данном примере просто возвращаем массив результатов
            return results;
        })
        .catch(error => {
            // Обработка ошибок
            throw new Error(`Ошибка при получении данных из API: ${error.message}`);
        });
}

// Пример использования:
const apiUrls = [
    // Список URL для запросов к API (для примера)
    "https://api.example.com/data1",
    "https://api.example.com/data2",
    "https://api.example.com/data3"
];

fetchMultipleAPIs(apiUrls)
    .then(combinedResult => {
        console.log("Объединенный результат:", combinedResult);
    })
    .catch(error => {
        console.error(error.message);
    });
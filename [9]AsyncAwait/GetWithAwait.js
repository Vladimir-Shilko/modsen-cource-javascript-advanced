function fetchDataFromServer(url) {
    return new Promise((resolve, reject) => {
        //choose random time for each request
        const randomTime = Math.random() * 1000;
        // Имитация асинхронной загрузки данных с сервера
        setTimeout(() => {
            const data = url[url.length-1];
            resolve(data);
        }, randomTime); // Имитация задержки загрузки в 2 секунды
    });
}

async function fetchFromMultipleServers(serverUrls) {
    try {
        const promises = serverUrls.map(url => fetchDataFromServer(url));
        const results = await Promise.all(promises);
        return results;
    } catch (error) {
        throw new Error(`Ошибка при загрузке данных с серверов: ${error.message}`);
    }
}

// Пример использования:
const serverUrls = [
    "https://server1.example.com/data1",
    "https://server2.example.com/data2",
    "https://server3.example.com/data3"
];

fetchFromMultipleServers(serverUrls)
    .then(results => {
        console.log("Результаты загрузки с серверов:", results);
    })
    .catch(error => {
        console.error(error.message);
    });
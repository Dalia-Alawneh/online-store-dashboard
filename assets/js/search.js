const search = document.getElementById('search')
async function searchData(query, type) {
    try {
        const response = await fetch(`https://dummyjson.com/${type}/search?q=${query}`);
        return await response.json();
    } catch (error) {
        console.error(error);
    }
}

function searchdebounce(callback, delay) {
    let currentTimeout
    return function () {
        clearTimeout(currentTimeout)
        currentTimeout = setTimeout(() => {
            callback.apply(this, arguments)
        }, delay)
    }
}
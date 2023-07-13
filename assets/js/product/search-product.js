async function showSearchResult() {
    const products = await searchData(search.value, "product")
    console.log(products);
    displayTableProducts(products.products)
}


search.addEventListener('keyup', searchdebounce(showSearchResult, 500))


async function generateProductsByCategories() {
    const categoryName = getParam("name")
    const products = await getData(`https://dummyjson.com/products/category/${categoryName}`)
    console.log(products);
    displayProductsByCategory(products.products)
}
generateProductsByCategories()
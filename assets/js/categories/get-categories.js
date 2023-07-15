async function generateCategories() {
    const categories = await getData(`https://dummyjson.com/products/categories`)
    displayCategories(categories)
}


generateCategories()
async function generateCarts() {
    const carts = await getData(`https://dummyjson.com/carts`)
    displayCarts(carts.carts)
}


generateCarts()
async function generateCarts() {
    const id = getId()
    const carts = await getData(`https://dummyjson.com/carts`)
    displayCarts(carts.carts)
    console.log(carts);
}


generateCarts()
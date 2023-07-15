async function generateCart() {
    const id = getId()
    const carts = await getData(`https://dummyjson.com/carts/user/${id}`)
    displayName(id)
    displayCarts(carts.carts)
}


generateCart()
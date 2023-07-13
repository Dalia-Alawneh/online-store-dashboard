async function generateCart() {
    const id = getId()
    const carts = await getData(`https://dummyjson.com/carts/user/${id}`)
    const user = await getData(`https://dummyjson.com/users/${id}`)
    document.querySelector('#user-first-name').textContent = user.firstName + "'s"
    displayCarts(carts.carts)
}


generateCart()
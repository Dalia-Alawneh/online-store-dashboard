async function generateCart(){
    const id = getId()
    const carts =await getData(`https://dummyjson.com/carts/user/${id}`)
    displayCarts(carts.carts)
    console.log(carts);
}


generateCart()
async function getUserName(id){
    const user =await getData(`https://dummyjson.com/users/${id}`)
    console.log(user.firstname);
}

function displayCarts(carts,userName){
    let result =``
    carts.forEach((cart,index) => {
        result += `
        <div class="card p-2 my-4">
            <div class="card-header d-flex justify-content-between align-items-center">
            <p class="mb-0">Cart #${index+1}</p>
            <a href="#" class="mb-0 text-decoration-none">User ID: ${
                cart.userId
                // getUserName()
            }</a>
            </div>
            <div class="card-body">
            <div class="total-discount">Total Discount:<span class="fw-bold"> $${cart.discountedTotal}</span> </div>
            <div class="total-price">Total Price: <span class="fw-bold">$${cart.total}</span></div>
            <div class="total-products">Total Products: <span class="fw-bold">${cart.totalProducts}</span></div>
            <div class="total-quantity">Total Quantity: <span class="fw-bold">${cart.totalQuantity}</span></div>
                <table class="table table-responsive mt-4">
                    <thead>
                        <tr>
                            <th>Title</th>
                            <th>Price</th>
                            <th>Quantity</th>
                            <th>Discount Percentage</th>
                            <th>Total</th>
                            <th>Discounted Price</th>
                        </tr>
                    </thead>
                    <tbody id="cart-data">
                    ${
                        cart.products.map((product)=>{
                            return `
                            <tr>
                                <td>${product.title}</td>
                                <td class="text-danger">${product.price}</td>
                                <td>${product.quantity}</td>
                                <td>% ${product.discountPercentage}</td>
                                <td class="text-info">${product.total}</td>
                                <td class="text-success fw-bold ">${product.discountedPrice}</td>
                            </tr>
                            `
                        }).join('')
                    }
                    </tbody>
                </table>
            </div>
        </div>`
    });
    document.querySelector('.cart').innerHTML = result
}


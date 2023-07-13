

function displayCarts(carts){
    let result =``
    carts.forEach((cart,index) => {
        result += `
        <div class="card p-2">
            <div class="card-header">
                Cart #${index+1}
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
                            <th>Discount Percentage</th>
                            <th>Discount Price</th>
                            <th>Quantity</th>
                            <th>Total</th>
                        </tr>
                    </thead>
                    <tbody id="cart-data">
                    ${
                        cart.products.map((product)=>{
                            return `
                            <tr>
                                <td>${product.title}</td>
                                <td class="text-danger">${product.price}</td>
                                <td>% ${product.discountPercentage}</td>
                                <td class="text-info ">${product.discountedPrice}</td>
                                <td>${product.quantity}</td>
                                <td class="text-success fw-bold">${product.total}</td>
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


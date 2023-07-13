

function displayCarts(){
    let result = ` <div class="col-md-4">
    <div class="card">
        <div class="card-header">
            User name
        </div>
        <div class="card-body">
            <table class="table">
                <thead>
                    <tr>
                        <th>User</th>
                        <th>Products</th>
                        <th>Price</th>
                        <th>Quantity</th>
                    </tr>
                </thead>
                <tbody id="cart-data">
                </tbody>
            </table>
        </div>
    </div>
</div>`
}

async function displayCarts(){
    const carts = await getData('https://dummyjson.com/carts')
    console.log(carts);
    // displayCarts(carts)
}
generateCarts()
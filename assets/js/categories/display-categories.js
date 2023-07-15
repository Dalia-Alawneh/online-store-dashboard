function displayCategories(categories) {
    let result = ``
    categories.forEach((category, index) => {
        result += `
        <div class="col-md-4 mb-3">
            <a href="category.html?name=${category}" class="text-decoration-none">
            <span class="card border-0 category p-4 text-capitalize text-center ">${category}</span></a>
        </div>
        `
    });
    console.log(typeof(result))
    if(result===''){
        console.log('hhhhh');
        result = `
        <div class="text-center d-flex justify-content-center mt-5">User have no cart yet!</div>
        `
    }
    document.querySelector('#categories').innerHTML = result
}


function displayProductsByCategory(products){
    let result = ``
    products.forEach(function(product) {
        result += `
            <div class="col-md-4">
                <div class="card mb-4">
                    <img src="${product.thumbnail}" class="card-img-top img" alt="${product.title}">
                    <div class="card-body">
                        <h5 class="card-title">${product.title}</h5>
                        <p class="card-text">${product.description}</p>
                        <p class="card-text">Price: $${product.price}</p>
                        <p class="card-text">Rating: ${product.rating}</p>
                        <p class="card-text">Stock: ${product.stock}</p>
                    </div>
                </div>
            </div>
        `;
    });
    document.getElementById('category').innerHTML = result
}
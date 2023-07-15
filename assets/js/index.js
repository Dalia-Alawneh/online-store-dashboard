
function displayTableProducts(products) {
    const tbody = document.getElementById('products');
    let result = '';
    products.forEach((product) => {
        result += `
        <tr>
            <td>${product.id}</td>
            <td>${product.title}</td>
            <td><img class="product-img" src="${product.images[0]}" alt="${product.title}" width="50"></td>
            <td>$${product.price}</td>
            <td>${product.rating}</td>
            <td>${product.stock}</td>
            <td>${product.brand}</td>
            <td>${product.category}</td>
            <td><a href= "pages/edit-product.html?id=${product.id}"><img src="assets/img/edit.png"  width="20"/></a></td>
            <td><button onclick = deleteConfirmModal(${product.id})><img src="assets/img/trash.png"  width="22"/></button></td>
        </tr>`;
    });
    if(result===''){
        console.log('hhhhh');
        result = `
        <tr><td colspan=10>No more Products!</td></tr>
        `
    }
    tbody.innerHTML = result;
}

// async function generateProducts(display) {
//     const data = await getData('https://dummyjson.com/products')
//     display(data.products)
// }

// generateProducts(displayTableProducts)


let currentPage = 1;
const limit = 10;

async function generateProducts(display, page) {
    const skip = (page - 1) * limit;
    const url = `https://dummyjson.com/products?limit=${limit}&skip=${skip}`;
    const data = await getData(url);
    display(data.products);
}

function nextPage(display) {
    currentPage++;
    generateProducts(display, currentPage);
}

function previousPage(display) {
    if (currentPage > 1) {
        currentPage--;
        generateProducts(display, currentPage);
    }
}

generateProducts(displayTableProducts, currentPage);

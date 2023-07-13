const editForm = document.getElementById("edit-form")
const [title, , price, rating, stock, brand] = editForm.elements;

let product = {}



async function getProduct(id) {
    try {
        const response = await fetch(`https://dummyjson.com/products/${id}`);
        return await response.json();
    } catch (error) {
        console.error(error);
        showModal("An Error Occured","../assets/img/warning.png", 'danger')
    }
}

async function displayForm(product) {
    const images = document.getElementById('images')
    images.innerHTML = `
    ${product.images?.map((img) => {
        return `<div class="col-md-2 col-sm-4">
                    <img class="aspect" src="${img}"/>
                </div>`
    }).join('')}`

    title.value = product.title
    price.value = product.price
    rating.value = product.rating
    stock.value = product.stock
    brand.value = product.brand
}

async function generateOldProduct() {
    const id = getId()
    product = await getProduct(id)
    document.getElementById('product-title').textContent = product.title
    displayForm(product)
}

generateOldProduct()

editForm.addEventListener('submit', async(e)=>{
    e.preventDefault()
    const id = getId()
    const response = await updateProduct(id)
    if(response){
        showModal("Product Updated Successfully", "../assets/img/check.png", "success")
    }

})

async function updateProduct(id) {
    const product = {
        title: title.value,
        price: price.value,
        rating: rating.value,
        stock: stock.value,
        brand: brand.value,
    };
    console.log(product);
    try {
        const response = await fetch(`https://dummyjson.com/products/${id}`, {
            method: 'PUT', /* or PATCH */
            headers: {
                'Content-Type': 'application/json',
                accept: "application/json"
            },
            body: JSON.stringify({product})
        });
        return await response.json();
    } catch (error) {
        console.error(error);
        showModal("An Error Occured", "../assets/img/warning.png", 'danger')
    }
}

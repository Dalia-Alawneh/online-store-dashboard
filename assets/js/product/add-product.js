const addForm = document.getElementById("add-form")
const [title, images, price, rating, stock, brand] = addForm.elements;

console.log(addForm.elements);


addForm.addEventListener('submit', async (e) => {
    e.preventDefault()
    const product = {
        title: title.value,
        price: price.value,
        rating: rating.value,
        stock: stock.value,
        brand: brand.value,
    };
    const res = await postData(product,'https://dummyjson.com/products/add')
    if (res) {
        showModal("Product Added Successfully", "../assets/img/check.png", "success")
        addForm.reset()
        // setTimeout(()=>{},10000)
        // window.location = "../index.html"
    }
    console.log(res);
})


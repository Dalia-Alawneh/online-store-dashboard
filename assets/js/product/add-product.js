const addForm = document.getElementById("add-form")
const [title, images, price, rating, stock, brand] = addForm.elements;

console.log(addForm.elements);

async function addProduct() {
    const product = {
        title: title.value,
        price: price.value,
        rating: rating.value,
        stock: stock.value,
        brand: brand.value,
    };
    try {
        const response = await fetch('https://dummyjson.com/products/add', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                accept: "application/json"
            },
            body: JSON.stringify({product})
        })
        return await response.json();
        
    } catch (error) {
        console.error(error);
        showModal("An Error Occured", "../assets/img/warning.png", 'danger')
    }
}
addForm.addEventListener('submit',async (e)=>{
    e.preventDefault()
    const res = await addProduct()
    if(res){
        showModal("Product Added Successfully", "../assets/img/check.png", "success")
        // setTimeout(()=>{},10000)
        // window.location = "../index.html"
    }
    console.log(res);
})


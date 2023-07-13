
async function deleteProduct(id) {
    hideAlert('.alert')
    try {
        const response = await fetch(`https://dummyjson.com/products/${id}`, {
            method: 'DELETE',
        })
        const product = await response.json();
        if(product){
            showModal(`Product deleted successfully`,"assets/img/check.png", 'success')
        }
    } catch (error) {
        console.error(error);
        showModal("An Error Occured","assets/img/warning.png", 'danger')
    }
}

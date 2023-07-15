async function deleteCart(id) {
    hideAlert('.alert')
    try {
        const response = await fetch(`https://dummyjson.com/carts/${id}`, {
            method: 'DELETE',
        })
        const user = await response.json();
        if (user) {
            showModal(`Cart deleted successfully`, "../assets/img/check.png", 'success')
        }
    } catch (error) {
        console.error(error);
        showModal("An Error Occured", "assets/img/warning.png", 'danger')
    }
}

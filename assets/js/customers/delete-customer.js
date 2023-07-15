async function deleteUser(id) {
    hideAlert('.alert')
    try {
        const response = await fetch(`https://dummyjson.com/users/${id}`, {
            method: 'DELETE',
        })
        const user = await response.json();
        if (user) {
            showModal(`User deleted successfully`, "../assets/img/check.png", 'success')
        }
    } catch (error) {
        console.error(error);
        showModal("An Error Occured", "assets/img/warning.png", 'danger')
    }
}


async function generateCustomer() {
    const id = getId()
    const customer = await getData(`https://dummyjson.com/users/${id}`)
    displayName(id)
    displayCustomer(customer)
}
generateCustomer()
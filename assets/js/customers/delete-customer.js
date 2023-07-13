async function deleteUser(id) {
    hideAlert('.alert')
    try {
        const response = await fetch('https://dummyjson.com/users/1', {
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

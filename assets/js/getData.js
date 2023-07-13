async function getData(api) {
    try {
        const response = await fetch(api);
        return await response.json();
    } catch (error) {
        console.error(error);
        showModal("An Error Occured", "assets/img/warning.png", 'danger')
    }
}
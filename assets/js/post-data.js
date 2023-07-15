async function postData(data,api) {
    try {
        const response = await fetch(api, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                accept: "application/json"
            },
            body: JSON.stringify({ data })
        })
        return await response.json();

    } catch (error) {
        console.error(error);
        showModal("An Error Occured", "../assets/img/warning.png", 'danger')
    }
}
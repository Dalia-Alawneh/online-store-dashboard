async function displayName(id) {
    const name = await getName(id)
    document.getElementById('user-first-name').textContent = name
}

async function getName(id) {
    const user = await getData(`https://dummyjson.com/users/${id}`)
    return user.firstName;
}
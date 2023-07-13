
function showModal(message, img, util) {
    const modal = document.createElement('div')
    modal.classList.add('alert')
    modal.classList.add(util)
    modal.innerHTML = `<img src="${img}" width="50">
    <p class="my-2">${message}</p>
    <button class="btn btn-info" onclick = hideAlert('.alert')>Ok</button>`
    document.body.appendChild(modal)
}


function hideAlert(util) {
    const alert = document.querySelector(util)
    document.body.removeChild(alert)
}

function deleteConfirmModal(id, img = "assets/img/warning.png") {
    const confirmModal = document.createElement('div')
    confirmModal.classList.add('alert')
    confirmModal.classList.add('confirm-alert')
    confirmModal.classList.add('danger')
    confirmModal.innerHTML = `
    <img src="${img}" width="50">
    <p class="my-2">Are you sure you want to delete this product?</p>
    <button class="btn btn-info" onclick = deleteProduct(${id})>Yes, Delete it</button>
    <button class="btn btn-info" onclick = hideAlert('.alert')>Cancel</button>`
    document.body.appendChild(confirmModal)
}
function deleteUserConfirmModal(id, img = "../assets/img/warning.png") {
    const confirmModal = document.createElement('div')
    confirmModal.classList.add('alert')
    confirmModal.classList.add('confirm-alert')
    confirmModal.classList.add('danger')
    confirmModal.innerHTML = `
    <img src="${img}" width="50">
    <p class="my-2">Are you sure you want to delete this user?</p>
    <button class="btn btn-info" onclick = deleteUser(${id})>Yes, Delete it</button>
    <button class="btn btn-info" onclick = hideAlert('.alert')>Cancel</button>`
    document.body.appendChild(confirmModal)
}
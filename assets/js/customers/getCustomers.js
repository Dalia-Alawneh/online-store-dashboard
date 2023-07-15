function displayCustomers(customers) {
    console.log(customers);
    const tbody = document.getElementById('users');
    let result = '';
    customers.forEach((customer) => {
        result += `
        <tr>
            <td>${customer.id}</td>
            <td><a href="user.html?id=${customer.id}">${customer.firstName}</a></td>
            <td>${customer.lastName}</td>
            <td><img class="customer-img" src="${customer.image}" alt="${customer.title}" width="50"></td>
            <td>${customer.gender}</td>
            <td>${customer.email}</td>
            <td>${customer.age}</td>
            <td>${customer.address.address}</td>
            <td><a href= "user-cart.html?id=${customer.id}"><img src="../assets/img/trolley.png"  width="20"/></a></td>
            <td><button onclick = deleteUserConfirmModal(${customer.id})><img src="../assets/img/trash.png"  width="22"/></button></td>
        </tr>`;
    });
    if(result===''){
        console.log('hhhhh');
        result = `
        <tr><td colspan=10>No more Customers!</td></tr>
        `
    }
    tbody.innerHTML = result;
}

let currentPage = 1;
const limit = 10;

async function generateCustomers(display, page) {
    const skip = (page - 1) * limit;
    const url = `https://dummyjson.com/users?limit=${limit}&skip=${skip}`;
    const data = await getData(url);
    displayCustomers(data.users);
}

function nextPage(display) {
    currentPage++;
    generateCustomers(display, currentPage);
}

function previousPage(display) {
    if (currentPage > 1) {
        currentPage--;
        generateCustomers(display, currentPage);
    }
}

generateCustomers(displayCustomers, currentPage);
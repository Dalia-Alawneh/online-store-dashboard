function displayCustomers(customers){
    console.log(customers);
    const tbody = document.getElementById('users');
    let result = '';
    customers.forEach((customer) => {
        result += `
        <tr>
            <td>${customer.id}</td>
            <td>${customer.firstName}</td>
            <td>${customer.lastName}</td>
            <td><img class="customer-img" src="${customer.image}" alt="${customer.title}" width="50"></td>
            <td>${customer.gender}</td>
            <td>${customer.email}</td>
            <td>${customer.age}</td>
            <td>${customer.address.address}</td>
            <td><a href= "pages/edit-customer.html?id=${customer.id}"><img src="/assets/img/edit.png"  width="20"/></a></td>
            <td><button onclick = deleteConfirmModal(${customer.id})><img src="/assets/img/trash.png"  width="22"/></button></td>
        </tr>`;
    });
    
    tbody.innerHTML = result;
}

async function generateCustomers(){
    const customers = await getData("https://dummyjson.com/users")
    console.log(customers.users);
    displayCustomers(customers.users)
}
generateCustomers()
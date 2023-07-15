function displayCustomer(customer) {
    const customerSection = document.getElementById('customer');
    const result = `
    <div class="row">
    <div class="col-md-6">
        <div class="card">
            <img src="${customer.image}" class="card-img-top" alt="User Image">
            <div class="card-body">
                <h5 class="card-title">Personal Information</h5>
                <ul class="list-group">
                    <li class="list-group-item"><strong>Name:</strong> ${customer.firstName} ${customer.lastName}</li>
                    <li class="list-group-item"><strong>Age:</strong> ${customer.age}</li>
                    <li class="list-group-item"><strong>Gender:</strong> ${customer.gender}</li>
                    <li class="list-group-item"><strong>Email:</strong> ${customer.email}</li>
                    <li class="list-group-item"><strong>Phone:</strong> ${customer.phone}</li>
                    <li class="list-group-item"><strong>Username:</strong> ${customer.username}</li>
                    <li class="list-group-item"><strong>Birth Date:</strong> ${customer.birthDate}</li>
                    <li class="list-group-item"><strong>Blood Group:</strong> ${customer.bloodGroup}</li>
                    <li class="list-group-item"><strong>Height:</strong> ${customer.height} cm</li>
                    <li class="list-group-item"><strong>Weight:</strong> ${customer.weight} kg</li>
                    <li class="list-group-item"><strong>Eye Color:</strong> ${customer.eyeColor}</li>
                    <li class="list-group-item"><strong>Hair Color:</strong> ${customer.hair.color}</li>
                    <li class="list-group-item"><strong>Hair Type:</strong> ${customer.hair.type}</li>
                </ul>
            </div>
        </div>
    </div>
    <div class="col-md-6">
        <div class="card">
            <div class="card-body">
                <h5 class="card-title">Contact Information</h5>
                <ul class="list-group">
                    <li class="list-group-item"><strong>Address:</strong> ${customer.address.address}, ${customer.address.city}, ${customer.address.state} ${customer.address.postalCode}</li>
                    <li class="list-group-item"><strong>Coordinates:</strong> ${customer.address.coordinates.lat}° N, ${customer.address.coordinates.lng}° E</li>
                    <li class="list-group-item"><strong>Postal Code:</strong> ${customer.address.postalCode}</li>
                    <li class="list-group-item"><strong>Mac Address:</strong> ${customer.macAddress}</li>
                    <li class="list-group-item"><strong>University:</strong> ${customer.university}</li>
                    <li class="list-group-item"><strong>Bank Card Expire:</strong> ${customer.bank.cardExpire}</li>
                    <li class="list-group-item"><strong>Bank Card Number:</strong> ${customer.bank.cardNumber}</li>
                    <li class="list-group-item"><strong>Bank Card Type:</strong> ${customer.bank.cardType}</li>
                    <li class="list-group-item"><strong>Currency:</strong> ${customer.bank.currency}</li>
                    <li class="list-group-item"><strong>IBAN:</strong> ${customer.bank.iban}</li>
                </ul>
            </div>
        </div>
        <br>
        <div class="card">
            <div class="card-body">
                <h5 class="card-title">Employment Information</h5>
                <ul class="list-group">
                    <li class="list-group-item"><strong>Company:</strong> ${customer.company.name}</li>
                    <li class="list-group-item"><strong>Department:</strong> ${customer.company.department}</li>
                    <li class="list-group-item"><strong>Title:</strong> ${customer.company.title}</li>
                    <li class="list-group-item"><strong>Company Address:</strong> ${customer.company.address.address}, ${customer.company.address.city}, ${customer.company.address.state} ${customer.company.address.postalCode}</li>
                    <li class="list-group-item"><strong>Company Coordinates:</strong> ${customer.company.address.coordinates.lat}° N, ${customer.company.address.coordinates.lng}° E</li>
                    <li class="list-group-item"><strong>EIN:</strong> ${customer.ein}</li>
                </ul>
            </div>
        </div>
    </div>
</div>
    `;
    if(result===''){
        console.log('hhhhh');
        result = `
        <div class="text-center">No Data!</div>
        `
    }
    customerSection.innerHTML = result;
}

async function generateCustomer() {
    const id = getId()
    const customer = await getData(`https://dummyjson.com/users/${id}`)
    displayName(id)
    displayCustomer(customer)
}
generateCustomer()

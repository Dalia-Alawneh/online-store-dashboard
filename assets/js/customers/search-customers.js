async function showSearchResult() {
    const customers = await searchData(search.value, "users")
    console.log(customers);
    displayCustomers(customers.users)
}

search.addEventListener('keyup', searchdebounce(showSearchResult, 500))
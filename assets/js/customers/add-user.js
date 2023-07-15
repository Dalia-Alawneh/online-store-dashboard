const addForm = document.getElementById("add-form")
const [firstName, lastName, age, profileImg, role] = addForm.elements;

console.log(addForm.elements);


addForm.addEventListener('submit', async (e) => {
    e.preventDefault()
    const user = {
        firstName: firstName.value,
        lastName: lastName.value,
        age: age.value,
        profileImg: profileImg.value,
        role: role.value,
    };
    const res = await postData(user,'https://dummyjson.com/users/add')
    if (res) {
        showModal("User Added Successfully", "../assets/img/check.png", "success")
        addForm.reset()
        // setTimeout(()=>{},10000)
        // window.location = "../index.html"
    }
    console.log(res);
})


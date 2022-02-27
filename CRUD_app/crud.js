users = [];
_id = 1

function addUser(_name, _surname, _email) {
    users.push({
        u_id: _id,
        u_name: _name,
        u_surname: _surname,
        u_email: _email
    })
    _id++
}
function UserData(e) {
    e.preventDefault()
    let name = document.querySelector("#ad");
    let surname = document.querySelector("#soyad");
    let email = document.querySelector("#email");
    addUser(name.value, surname.value, email.value);
    ShowUserData();
    ClearInput();
}
let tbody = document.querySelector("tbody");
function ShowUserData() {
    let tr = `
        <tr>
            <th scope="row">${users[users.length - 1].u_id}</th>
            <td>${users[users.length - 1].u_name}</td>
            <td>${users[users.length - 1].u_surname}</td>
            <td>${users[users.length - 1].u_email}</td>
            <td><button onclick="DeleteData(this,${users[users.length - 1].u_id},event)" type="button" class="btn btn-danger">Delete</button>
                <button type="button" class="btn btn-success">Update</button>
            </td>
        </tr>
    `
    tbody.innerHTML += tr;
}
function ClearInput() {
    let name = document.querySelector("#ad");
    let surname = document.querySelector("#soyad");
    let email = document.querySelector("#email");
    name.value = "";
    surname.value = "";
    email.value = "";
}
function DeleteData(item, id, e) {
    e.preventDefault();
    swal({
        title: "Are you sure?",
        text: "Once deleted, you will not be able to recover this imaginary file!",
        icon: "warning",
        buttons: true,
        dangerMode: true,
    })
        .then((willDelete) => {
            if (willDelete) {
                for (let i in users) {
                    if (users[i].u_id == id) {
                        users.splice(i, 1);
                    }
                }
                tbody.removeChild(item.parentElement.parentElement);
            } else {
                swal("Your imaginary file is safe!");
            }
        });



}


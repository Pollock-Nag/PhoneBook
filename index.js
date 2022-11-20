var addressBook = []

function createContact() {
    var user = {};

    user['Name'] = document.getElementById("name").value;
    user['Surname'] = document.getElementById("surname").value;
    user['PhoneNumber'] = document.getElementById("phonenumber").value;
    user["Address"] = document.getElementById("address").value;

    //validate input and put object in addressBook
    let isValidInfo = validation(user)
    if (isValidInfo) { showContacts(addressBook) }
    else { showError() }

}

function showAllContact() { showContacts(addressBook) }

function showContacts(addressBook) {
    //Fisrt clear the previous user list of dom
    removeTillnow()
    //Then show current user list to dom
    showUsers(addressBook)
}

function removeContact() {
    let name = document.getElementById("remove_name").value;
    addressBook = addressBook.filter(function (contact) {
        return contact["Name"] != name
    });
    showContacts(addressBook)
}


function searchContact() {
    let name = document.getElementById("search_name").value;
    searched_from_addressBook = addressBook.filter(function (contact) {
        return contact["Name"] == name
    });
    showContacts(searched_from_addressBook)
    //showSearchedUsers(searched_from_addressBook)
    //console.log(searched_from_addressBook)
}

function removeTillnow() {
    //makeing ul EMPTY
    var e = document.querySelector('ul');
    e.innerHTML = ""
}

function showUsers(addressBook) {


    //console.log(addressBook)
    var ul = document.getElementById("contactList")

    for (let contact in addressBook) {

        let name = addressBook[contact]['Name']
        let surname = addressBook[contact]['Surname']
        let phonenumber = addressBook[contact]['PhoneNumber']
        let address = addressBook[contact]['Address']
        let res = name + " || " + surname + " || " + phonenumber + " || " + address
        let li = document.createElement('li');
        li.innerHTML = res
        ul.appendChild(li)

    }


    //for romoving "Invalid INFO"
    document.getElementById("errorField").innerHTML = ""

}

function showError() {
    response = "Please Enter a Valid Information"
    let errorBox = document.getElementById("errorField");
    errorBox.style.color = 'red' //making error box red colour
    errorBox.innerHTML = response
}

function validation(user) {
    let isValidInfo = true
    if (user['Name'].length != 0 && user['Surname'].length != 0 &&
        user['PhoneNumber'].length != 0 && user["Address"].length != 0) {
        addressBook.push(user);
    }
    else {
        isValidInfo = false
    }

    return isValidInfo

}

//On click using jQuery
$(document).ready(function () {

    $('#removeButton').on({
        click: function () {
            console.log("Clicking on submit button");
            removeContact()
        }
    })


    $('#searchButton').on({
        click: function () {
            console.log("Clicking on submit button");
            searchContact()
        },

    })


})



let password = document.getElementById("password")
let name = document.getElementById("name")
let surname = document.getElementById("surname")
let emailAddress = document.getElementById("emailAddress")
let checkbox = document.getElementById("checkbox")
let submit = document.getElementById("submit")
let confirmPassword = document.getElementById("confirmPassword")
let page = document.getElementById("page")


function validForm (){
    if (surname.value == ""){
        errorSurname.innerHTML = `<p class="text-danger">*Merci de bien vouloir renseigner votre Nom</p>`
        surname.style.backgroundColor = `pink`
    } else  {
        errorSurname.innerHTML = ""
        surname.style.backgroundColor = ""
    }

    if (name.value == ""){
        errorName.innerHTML = `<p class="text-danger">*Merci de bien vouloir renseigner votre Prénom</p>`
        name.style.backgroundColor = `pink`
    } else if (name.value != ""){
        errorName.innerHTML = ""
        name.style.backgroundColor = ""
    }

    if(emailAddress.value == ""){
        errorAddress.innerHTML = `<p class="text-danger">*Merci de bien vouloir renseigner votre email</p>`
        emailAddress.style.backgroundColor = `pink`
    } else if (emailAddress.value != ""){
        errorAddress.innerHTML = ""
        emailAddress.style.backgroundColor = ""
    }

    if (checkbox.checked == false ){
        errorCheckbox.innerHTML = `<p class="text-danger">*Merci de bien vouloir valider les CGU</p>`
    } else if (checkbox.checked == true){
        errorCheckbox.innerHTML = ""
    }

    if(password.value == ""){
        errorPassword.innerHTML = `<p class="text-danger">*Merci de bien vouloir renseigner votre mot de passe</p>`
        password.style.backgroundColor = `pink`
    }     else if (password.value != "") {
        errorPassword.innerHTML = ""
        password.style.backgroundColor = ""
    }

    if (confirmPassword.value == ""){
        errorconfirmPassword.innerHTML = `<p class="text-danger">*Merci de bien vouloir confirmer votre mot de passe</p>`
        confirmPassword.style.backgroundColor = `pink`
    }
    if (confirmPassword.value != password.value){
        errorconfirmPassword.innerHTML = `<p class="text-danger">*Veuillez rentrer un MDP identique</p>`
        confirmPassword.style.backgroundColor = `pink`
        
    } 
    else if (confirmPassword.value != "" && confirmPassword.value == password.value){
        errorconfirmPassword.innerHTML = ""
        confirmPassword.style.backgroundColor = ""
    }

    if (surname.value != "" && name.value != "" && password.value != "" && emailAddress.value != "" && confirmPassword.value == password.value && checkbox.checked == true ){
        page.innerHTML  = `<div class="container d-lg-block d-none"></div>`
        page.innerHTML = `<div>Merci de votre inscription <span class="fw-bold">${name.value}</span>, nous venons de nous envoyer un email de confirmation à <span class="fst-italic">${emailAddress.value}</span></div>`
    }  
}



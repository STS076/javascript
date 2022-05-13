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
        errorsurname.innerHTML = `<p class="text-danger">*Merci de bien vouloir renseigner votre Nom</p>`
        surname.style.backgroundColor = `pink`
    } else  {
        errorsurname.innerHTML = ""
        surname.style.backgroundColor = ""
    }

    if (name.value == ""){
        errorname.innerHTML = `<p class="text-danger">*Merci de bien vouloir renseigner votre Prénom</p>`
        name.style.backgroundColor = `pink`
    } else if (name.value != ""){
        errorname.innerHTML = ""
        name.style.backgroundColor = ""
    }

    if(emailAddress.value == ""){
        erroremailAddress.innerHTML = `<p class="text-danger">*Merci de bien vouloir renseigner votre email</p>`
        emailAddress.style.backgroundColor = `pink`
    } else if (emailAddress.value != ""){
        erroremailAddress.innerHTML = ""
        emailAddress.style.backgroundColor = ""
    }

    if (checkbox.checked == false ){
        errorcheckbox.innerHTML = `<p class="text-danger">*Merci de bien vouloir valider les CGU</p>`
    } else if (checkbox.checked == true){
        errorcheckbox.innerHTML = ""
    }

    if(password.value == ""){
        errorpassword.innerHTML = `<p class="text-danger">*Merci de bien vouloir renseigner votre mot de passe</p>`
        password.style.backgroundColor = `pink`
    }     else if (password.value != "") {
        errorpassword.innerHTML = ""
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
        page.innerHTML = `<img src="subwaticone.ico" class="logo mb-3" alt="icone subway"><div>Merci de votre inscription <span class="fw-bold">${name.value}</span>, nous venons de nous envoyer un email de confirmation à <span class="fst-italic">${emailAddress.value}</span></div>`
    }  
    
}

// fonction pour effacer le message d'erreur quand je rentre dans les input
function cleanError(id){
    // va viser les élement id dans input
    
    // let element = "error" + id
    // let errormessage = document.getElementById(element)
    let errormessage = document.getElementById("error" + id)
    errormessage.innerHTML = ""
    // créé une variable pour cibler les id des élement backgroundColor dans input
    let background = document.getElementById(id)
    background.style.backgroundColor = ""
}





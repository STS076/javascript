// let day = "jeudi";
// if(day == "jeudi"){
//     console.log("Nous sommes jeudi")
// } // else {
// //     console.log("Nous ne sommes pas jeudi")
// // }
// il n'est pas nécessaire de mettre un else, facultatif.

// let mail = window.prompt("Veuillez saisir votre login :")
// if(mail == "admin@admin.fr"){
//     console.log("mode alerte activé")
// }else {
//         console.log("accès refusé")
// }


// let nb = window.prompt("Veuillez saisir un nombre")
// if(nb < 21){
//     console.log ("Ce chiffre est inférieur à 21")
// } else {
//     console.log("Ce chiffre est supérieur à 21")
// }

// let number = 0
// if(number === 0){
//     console.log("condition remplie")
// }
// typeof, fonction JS permettant de sortir le type de variable. 
// demander à l'utilisateur de rentrer un sonda,ge si sup ou égal, maj, sinon afficher vous etes mineur. 

// let age = window.prompt("Veuillez saisir votre age")
// if(age >= 18){
//    console.log("Vous êtes majeur")
//  }else{
//     console.log("vous êtes mineur")
// }
// if(age >18 || age == 18){
//     console.log("vous êtes majeur")
// }else{
//     console.log("vous êtes mineur")
// }
// || permet d'avoir deux conditions


// let number = window.prompt("Veuillez rentrer un chiffre")
// if((number % 2) == 0 ){
//     console.log("Ceci est un nombre chiffre pair")
// }else{
//     console.log("Ceci est un nombre impair")
// }
// % restant d'une division

let note = window.prompt("Veuillez rentrer une note")
if(note <= 4 ){
    console.log("Nul")
}else if(note > 4 && note <= 6 ){
    console.log("moyen")
}else if(note > 6 && note <= 8){
    console.log("Assez Bien")
}else if (note > 8 && note <= 9){
    console.log("Bien")
}else if( note == 10 ){
    console.log("Excellent")
}
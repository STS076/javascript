let table = document.getElementById("table")

// let tableau = [{
// 	prenoms : "name" , 
// 	noms : "surname", 
// 	email : "address" , 
// }, 
// {
// 	prenoms : "name" , 
// 	noms : "surname", 
// 	email : "address" , 
// }, 
// {
// 	prenoms : "name" , 
// 	noms : "surname", 
// 	email : "address" , 
// }, 
// {
// 	prenoms : "name" , 
// 	noms : "surname", 
// 	email : "address" , 
// }, 
// {
// 	prenoms : "name" , 
// 	noms : "surname", 
// 	email : "address" , 
// }]

// tableau.forEach(element => {
//     for(let attribut in element){
//         table.innerHTML += (`<p>${attribut} - ${element[attribut]}</p>`)
//     }
// });

// for(let i = 0; i <= 4; i ++){
//     for(let y= 0; y <=2; y++){
//         console.log(tableau[i][y])
//     }
// }

// let exempleTableau = [
//     ["sophie", "jordan"], 
//     ["mickael", "alexandre"],
//     ["valentin", "stella"]
// ]

// exempleTableau.forEach(miniTableau =>{
//     miniTableau.forEach(prenom => {
//     table.innerHTML += `<h2>${prenom}</h2>`
// })
// })

let logicNumber = []; 
let count;
let value = 0

for ( let count = 0; count <= 20; count += 2){
    logicNumber[value] = count; 
    value ++ 
}

console.log(logicNumber[5])
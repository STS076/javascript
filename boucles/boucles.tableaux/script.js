// const container = document.getElementById("container");
// let languages = ['html', 'css', 'javascript', 'php', 'mysql', 'c++', 'ruby', 'python'];
// tableau indexé, avec des chiffres devant les valeurs. 
// crochets et tout ce qu'il se trouve sont des éléments d'un tableau. 
// console.table(languages[0])

// for(let i=0; i <=7; i++){
//     console.log(languages[i])
// }

// let index = 0
// while (index < languages.length){
//     console.log(languages[index]);
//     index++
// }

// languages.forEach(value => {
//     container.innerHTML += (`<p>${value}</p>`)
// });

// array est le tableau, remplace array par le nom qu'on lui a donné. foreach, va parcourir le tableau et 
// faire ressortir les valeur. 

// const tbody = document.getElementById("tbody");
// let index= 0
// languages.forEach(value => {
//     tbody.innerHTML += (`
//     <tr>      
//         <td>${index}</td>
//         <td>${value}</td>
//     </tr>     
//     `)
//     index++
// });

const daysArray = ['lundi', 'mardi', 'mercredi', 'jeudi', 'vendredi', 'samedi', 'dimanche'];
const tbody = document.getElementById("tbody");
daysArray.forEach(value => {
    if (value == "samedi" || value == "dimanche") {
        tbody.innerHTML += (`
        <tr>
            <td class="fw-bold">${value}</td>
        </tr>
        `);
    } else {
        tbody.innerHTML += (`
    <tr>
        <td>${value}</td>
    </tr>
    `);
    }
});

const monthsArray = ["Janvier", "Février", "Mars", "Avril", "Mai", "Juin", "Juillet", "Aout", "Septembre", "Octobre", "Novembre", "Décembre"];
const table = document.getElementById("table");
let index = 1
monthsArray.forEach(value => {
    table.innerHTML += (`
    <tr>      
        <td>${index}</td>
        <td>${value}</td>
    </tr>     
    `)
    index++
});

// let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let total = array [0]*array[1]...
// let result = 1
// for( let count = 0; count <= 9; count ++){
//      result = result * array[count]
//      console.log(result)
// }
let nb1 = document.getElementById("nb1")
let nb2 = document.getElementById("nb2")
let operator = document.getElementById("operator")
let result = document.getElementById("result")

let line = nb1
// variable qui va déterminer l'endroit où seront affichés les chiffres

// function addNumber (number){ 
//     if (operator.innerHTML == "" ){
//         nb1.innerHTML += number
//     }else {
//         nb2.innerHTML += number
//     }
// }

function addNumber(number) {
    line.innerHTML += number
}

function addOperator(sign) {
    operator.innerHTML = sign
    line = nb2
}
// une fois le signe entré, change de ligne et va sur nb2

function reset() {
    nb1.innerHTML = ""
    nb2.innerHTML = ""
    operator.innerHTML = ""
    result.innerHTML = ""
    line = nb1
}

function getResult(){
    let total
    switch (operator.innerHTML) {
        case "+":
            total = Number(nb1.innerHTML) + Number(nb2.innerHTML)
            break;
        case "-":
            total = Number(nb1.innerHTML) - Number(nb2.innerHTML)
            break;
        case "*":
            total = Number(nb1.innerHTML) * Number(nb2.innerHTML)
            break;
        case "/":
            total = Number(nb1.innerHTML) / Number(nb2.innerHTML); 
    }
    result.innerHTML = total
}



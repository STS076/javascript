let userNumber = document.getElementById("userNumber")
let answer = document.getElementById("answer")

let theNumber = Math.floor(Math.random() * 10)

function findNumber(){
    if(userNumber.value == theNumber){
        answer.innerHTML += `<p class="green" >Bravo</p>`
    }else if (userNumber.value > theNumber){
        answer.innerHTML += `<p class="pink" >Ce chiffre est plus grand que celui que tu dois deviner</p>`
    }else if (userNumber.value < theNumber){
        answer.innerHTML += `<p class="purple">Ce chiffre est plus petit que celui que tu dois deviner</p>`
    }
}




//  ne peut pas utiliser value si dans div. si input alors utilise value; pour le reste utiliser innerHTML. 
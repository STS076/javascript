// let button = document.getElementById("button")
// let result = document.getElementById("result")
// let theNumber = Math.floor(Math.random() * 3)


// function getcocktail(boisson) {
//     result.innerHTML = `vous avez choisit le ${boisson} à 8 euros`
// }

// let tableau = ["Pina Colada", "Mojito", "Long Island" ]
// console.table(tableau[theNumber])

let button = document.getElementById("button")
let battle = document.getElementById("battle")
let theNumber = Math.floor(Math.random() * 3)
let tableau = ["pierre", "papier", "ciseaux"]

function getsign (shifumi){
    let choix = document.getElementById("choix")
    // choix.style.backgroundImage = `url("${shifumi}.png")`
    choix.innerHTML = `${shifumi}`
}

function getbattle (){
    if( choix.innerHTML == ""){
        window.alert("essaye pas de tricher, fait ton choix en premier")
        resultbattle = ""
    } else {
        var resultbattle = document.getElementById("resultbattle")
        resultbattle.innerHTML = tableau[theNumber]
    }
}

function getresult(){
    let endgame = document.getElementById("endgame")
    if (choix.innerHTML == "pierre" && resultbattle.innerHTML == "papier"){
        endgame.innerHTML = "vous avez perdu"
    }else if (choix.innerHTML == "pierre" && resultbattle.innerHTML == "ciseaux"){
        endgame.innerHTML = "vous avez gagné"
    }
    else if (choix.innerHTML == "papier" && resultbattle.innerHTML == "ciseaux"){
        endgame.innerHTML = "vous avez perdu"
    }else if (choix.innerHTML == "papier" && resultbattle.innerHTML == "pierre"){
        endgame.innerHTML = "vous avez gagné"
    }
    else if(choix.innerHTML =="ciseaux" && resultbattle.innerHTML == "papier"){
        endgame.innerHTML = "gagné"
    }else if(choix.innerHTML =="ciseaux" && resultbattle.innerHTML == "pierre"){
        endgame.innerHTML = "looser"
    }
    else if (choix.innerHTML == "ciseaux" && resultbattle.innerHTML == "ciseaux" ){
        endgame.innerHTML = "match nul essaye encore"
    }else if( choix.innerHTML == "pierre" && resultbattle.innerHTML == "pierre"){
        endgame.innerHTML  = "match nul essaye encoer"
    }else if (choix.innerHTML == "papier" && resultbattle.innerHTML == "papier"){
        endgame.innerHTML = "match nul essaye encore "
    }
    else if (choix.innerHTML == "" || resultbattle.innerHTML == ""){
        endgame.innerHTML = ""
        window.alert("arrête de tricher, choisi en premier")
    }
}

function reset() {
    endgame.innerHTML = ""
    resultbattle.innerHTML = ""
    choix.innerHTML = ""
}

// choix.innerHTML va chercher le résultat. si prend que choix alors va chercher la div en entier.


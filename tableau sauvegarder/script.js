let arrayToShow = document.getElementById("arrayToShow")
let elementToAdd = document.getElementById("elementToAdd")
let elementToErase = document.getElementById("elementToErase")
let myarray = []

function saveInput() {
    myarray.push(`${elementToAdd.value}`)
    console.log(myarray)
    if (elementToAdd.value != "") {
        elementToAdd.value = ""
    }
    localStorage.setItem("monTableau", myarray)
}

function showArray() {
    // arrayToShow.innerHTML = `<p class="mt-5">Mon Tableau</p>`
    arrayToShow.innerHTML = `<p class="h2">${myarray}</p>`
    arrayToShow.innerHTML = localStorage.getItem("monTableau")
}

function myRemove() {
    // console.log(elementToErase.value)
    // console.log(myarray.indexOf(elementToErase.value))
    myarray.splice(myarray.indexOf(elementToErase.value), 1)
    if (elementToErase.value != "") {
        elementToErase.value = ""
    }
    localStorage.setItem("monTableau", myarray)
    console.log(myarray)
}
let elementToAdd = document.getElementById("elementToAdd")
let arrayToShow = document.getElementById("arrayToShow")
let myarray = []
let count = 0

function saveItem() {
    myarray.push(`${elementToAdd.value}`)
    console.log(myarray)
    localStorage.setItem("monTableau", myarray)
    if (elementToAdd.value != "") {
        arrayToShow.innerHTML += `<div class="card col-lg-3 shadow-sm p-3 my-4 mx-4 col-10" id="mycard${count}">
        <div class="card-body">       
            <p class="card-text">${elementToAdd.value}</p>
            <button class="btn bouton d-flex align-items-end" onclick="deleteItem('mycard${count}')">Supprimer</button>
        </div>
    </div>`
        count++
    }
    elementToAdd.value = ""
}

function deleteItem(element) {
    let mycard = document.getElementById(element)
    mycard.remove()
}

// peut mettre le let à l'intérieur ou à l'extérieur de la fonction
// let retrieve = localStorage.getItem("monTableau")
// retrieve = retrieve.split(",")
function showArray() {
    let retrieve = localStorage.getItem("monTableau")
    retrieve = retrieve.split(",")
    retrieve.forEach(element => {
        arrayToShow.innerHTML += `<div class="card col-lg-3 shadow-sm p-3 my-4 mx-4 col-10" id="mycard${count}">
                <div class="card-body">       
                <p class="card-text">${element}</p>
                <button class="btn bouton d-flex align-items-end" onclick="deleteItem('mycard${count}')">Supprimer</button>
            </div>
        </div>`
        count++
    });
}

// function showArray() {
//     let retrieve = localStorage.getItem("monTableau")
//     retrieve = retrieve.split(",")
//     for (let attribut in retrieve) {
//         arrayToShow.innerHTML += `<div class="card col-lg-3 shadow-sm p-3 my-4 mx-4 col-10" id="mycard${count}">
//                       <div class="card-body">       
//                         <p class="card-text">${retrieve[attribut]}</p>
//                        <button class="btn bouton d-flex align-items-end" onclick="deleteItem('mycard${count}')">Supprimer</button>
//                      </div>
//                     </div>`
//                  count ++
//     }
// }

// if (localStorage.getItem("monTableau")){
//     retrieve = localStorage.getItem("monTableau")
//     retrieve = retrieve.split(",")
// }
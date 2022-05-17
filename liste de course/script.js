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
    if (elementToAdd.value != "") {
        elementToAdd.value = ""
    }
}

function deleteItem(element) {
    let mycard = document.getElementById(element)
    mycard.remove()
}

function showArray() {
    let retrieve = localStorage.getItem("monTableau")
    cartes = retrieve.split(",")
    cartes.forEach(element => {
        arrayToShow.innerHTML += `<div class="card col-lg-3 shadow-sm p-3 my-4 mx-4 col-10" id="mycard${count}">
                <div class="card-body">       
                <p class="card-text">${element}</p>
                <button class="btn bouton d-flex align-items-end" onclick="deleteItem('mycard${count}')">Supprimer</button>
            </div>
        </div>`
        count ++
    });
}

// function showArray() {
//     let retrieve = localStorage.getItem("monTableau")
//     cartes = retrieve.split(",")
//     for (let attribut in cartes) {
//         arrayToShow.innerHTML += `<div class="card col-lg-3 shadow-sm p-3 my-4 mx-4 col-10" id="mycard${count}">
//                       <div class="card-body">       
//                         <p class="card-text">${cartes[attribut]}</p>
//                        <button class="btn bouton d-flex align-items-end" onclick="deleteItem('mycard${count}')">Supprimer</button>
//                     </div>
//                  </div>`
//                  count ++
//     }
// }


//         // arrayToShow.innerHTML += localStorage.getItem("monTableau")
//         // localStorage.getItem("monTableau")
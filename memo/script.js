let elementToAdd = document.getElementById("elementToAdd")
let count = 6

function save() {
    if (title.value != "" && note.value != "") {
        addNote.innerHTML += `<div class="card col-lg-3 shadow-sm p-3 my-4 mx-4 col-10" id="mycard${count}">
        <div class="card-header d-flex justify-content-between">
            <span>${title.value}</span><i class="bi bi-trash3" onclick="mydelete('mycard${count}')" type="button" id="mydelete"></i>
        </div>
        <div class="card-body">       
            <p class="card-text">${note.value}</p>
            <button class="btn bouton d-flex align-items-end">Modifier</button>
        </div>
    </div>`
        count++
        // welcomePage.innerHTML = `<div class=" d-lg-block d-none"></div>`
    }
    if (title.value != "" && note.value != "") {
        title.value = ""
        note.value = ""
    }
}

// permet de supprimer les cards. récupère les ID dans le onclick mydelete et va l'appeler. 
function mydelete(element) {
    let mycard = document.getElementById(element)
    mycard.remove()
}

function myremove() {
    title.value = ""
    note.value = ""
}

// mycard.parentNode.removeChild(mycard);

let myarray = [{
        id: "card1",
        title: "liste de course",
        note: "pommes, poires"
    },
    {
        id: "card2",
        title: "cuisine",
        note: "tiramisu"
    },
    {
        id: "card3",
        title: "sport",
        note: "va bouger tes fesses"
    },
    {
        id: "card4",
        title: "un titre",
        note: "je sais vraiment pas quoi marquer"
    },
    {
        id: "card5",
        title: "kebab",
        note: "on mange un kebab demain"
    }
]

myarray.forEach(element => {
    addNote.innerHTML += `<div class="card col-lg-3 shadow-sm p-3 my-4 mx-4 col-10" id="${element["id"]}${count}">
        <div class="card-header d-flex justify-content-between">
            <span>${element["title"]}</span><i class="bi bi-trash3" onclick="mydelete('${element["id"]}${count}')" type="button" id="mydelete"></i>
        </div>
        <div class="card-body">       
            <p class="card-text">${element["note"]}</p>
            <button class="btn bouton d-flex align-items-end">Modifier</button>
        </div>
    </div>`
});
let characters = [{
        race: "Pantoran",
        age: 25,
        planete: "Pantora",
        nom: "Riyo Chuchi",
        arme: "Blaster",
        photo: "riyo"
    },
    {
        race: "Togruta",
        age: 20,
        planete: "Shili",
        nom: "Ahsoka Tano",
        arme: "Two lighsabers",
        photo: "ahsoka"
    },
    {
        race: "Twi'lek",
        age: 30,
        planete: "Ryloth",
        nom: "Hera Syndulla",
        arme: "Blaster",
        photo: "hera"
    },
    {
        race: "Humain",
        age: 13,
        planete: "Kamino",
        nom: "Rex",
        arme: "Blaster",
        photo: "rex"
    },
    {
        race: "Duros",
        age: 35,
        planete: "Duro",
        nom: "Cad Bane",
        arme: "Blaster",
        photo: "cadbane"
    },
    {
        race: "Nemoidien",
        age: 50,
        planete: "Nemoidia",
        nom: "Nute Gunray",
        arme: "None",
        photo: "nutegunray"
    },
    {
        race: "Mon Calamari",
        age: 32,
        planete: "Mon Cala",
        nom: "Eerin Bant",
        arme: "Blue Lightsaber",
        photo: "eerinbant"
    },
    {
        race: "Humaine",
        age: 34,
        planete: "Alderaan",
        nom: "Breha Organa",
        arme: "Blaster",
        photo: "Breha"
    },
    {
        race: "Nautolan",
        age: 40,
        planete: "Glee Anselm",
        nom: "Kit Fisto",
        arme: "Sabre Laser vert",
        photo: "kitfisto"
    },
    {
        race: "Dathomirien",
        age: 28,
        planete: "Dathomir",
        nom: "Asajj Ventress",
        arme: "Red lightsabre",
        photo: "asajj"
    },
    {
        race: "Zabrak",
        age: 23,
        planete: "Dathomir",
        nom: "Dark Maul",
        arme: "Double sabre laser rouge",
        photo: "darthmaul"
    },
    {
        race: "Humain",
        age: 31,
        planete: "Kalevala",
        nom: "Satine Kryze",
        arme: "Blaster",
        photo: "satine"
    }
]

const table = document.getElementById("table")
characters.forEach(element => {
    table.innerHTML += (`
            <div class="cards col-lg-3 col-12 border border-dark shadow rounded m-5" >
                <div class="d-flex justify-content-between px-2 fs-4 pt-3 fw-bold text-decoration-underline">
                    <div>${element["nom"]}</div><div>${element["race"]}</div>
                </div>
                <img src="assets/${element["photo"]}.webp" class="img-100 pt-3" alt="photo star wars">
                <div class="p-3"> 
                    <p><span class="fw-bold">Planète</span> : ${element["planete"]}</p>         
                    <p><span class="fw-bold">Age</span> : ${element["age"]} ans</p>
                    <p><span class="fw-bold">Arme</span>: ${element["arme"]}</p>
                </div>
            </div>
`)
})

// utilisation += pour ne pas écraser HTML. 
// dans les crochets il faut toujours mettre les quote
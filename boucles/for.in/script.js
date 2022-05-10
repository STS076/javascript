// l'objet peut avoir des pptés. déclare avec les {} à l'intérieur lui créé des attributs avec : 
let car = {
    couleur: "rouge",
    motor: "diesel",
    marque: "peugeot",
    portes: 5,
}
for (let attribut in car) {
    console.log(`${attribut} : ${car[attribut]}`)
}

let cars = [{
        couleur: "rouge",
        motor: "diesel",
        marque: "peugeot",
        portes: 3,
    },
    {
        couleur: "noire",
        motor: "essence",
        marque: "fiat",
        portes: 5,
    },
    {
        couleur: "bleue",
        motor: "elec",
        marque: "renault",
        portes: 7,
    }
];

cars.forEach(element => {
    for(let attribut in element){
        console.log(`${attribut} - ${element[attribut]}`)
    }
});

// attribut est le titre, et pour appeler la valeur de l'attribut il faut l'appeler en premier. 
// for each parcours le tableau et forin parcours l'objet. element/ attribut = valeur de l'attribue. 
// boucle quand veut parcourir l'ensemble d'un tableau, des pptés d'un objet. 


let brand = window.prompt("Veuillez saisir une marque de voiture") 
brand = brand.toLowerCase()
let country 
switch(brand){
    case "renault":
    case "peugeot":
    case "citroen":
        country = "Ceci est une voiture Française";
    break;
    case "bmw":
        country ="Ceci est une voiture Allemande";
    break;
    case "ferrari":
        country ="Ceci est une voiture Italienne";
    break;
    case "ford":
        country ="Ceci est une voiture Américaine";
    break;
    case "aston martin":
        country ="Ceci est une voiture Anglaise";
    break;
    default:
        country ="Modèle inconnu";
}
console.log(country)
// peut mettre window.alert ou console.log à la place de coountry. 
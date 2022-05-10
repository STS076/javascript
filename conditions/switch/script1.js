let nb = window.prompt("Veuillez saisir un jour de la semaine") 
let day 
switch(nb){
    case "1":
        // day="Lundi";
    // break;
    case "2":
    //     day="Mardi";
    // break;
    case "3":
        day="Mercredi";
    break;
    case "4":
        day="Jeudi";
    break;
    case "5":
        day="Vendredi";
    break;
    case "6":
        day="Samedi";
    break;
    case "7":
        day="Dimanche";
    break;
    default:
        day="Veuillez saisir un chiffre entre 1 et 7";
}
console.log(day)
// compare une valeur av switch. compare une variable qui aura une fonction string. défaut si ne rentre dans aucun cas
//  break sert à sortir du switch. 


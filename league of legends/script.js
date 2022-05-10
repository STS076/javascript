let classement = [{
        position: 1,
        photo: "ldlcol",
        nom : "LDLC OL",
        played: 18,
        win: 13,
        lost: 5
    },
    {
        position: 2,
        photo: "bdsacademy",
        nom : "BDS ACADEMY",
        played: 18,
        win: 12,
        lost: 6
    },
    {
        position: 3,
        photo: "karminecorp",
        nom : "KARMINE CORP",
        played: 18,
        win: 12,
        lost: 6
    },
    {
        position: 4,
        photo: "misfitspremier",
        nom : "MISFIT PREMIER",
        played: 18,
        win: 11,
        lost: 7
    },
    {
        position: 5,
        photo: "vitalitybee",
        nom : "VITALITY.BEE",
        played: 18,
        win: 11,
        lost: 7
    },
    {
        position: 6,
        photo: "gamersorigin",
        nom : "GAMERS ORIGIN", 
        played: 18,
        win: 8,
        lost: 10
    },
    {
        position: 7,
        photo: "solary",
        nom : "SOLARY",
        played: 18,
        win: 8,
        lost: 10
    },
    {
        position: 8,
        photo: "gameward",
        nom : "GAMEWARD",
        played: 18,
        win: 7,
        lost: 11
    },
    {
        position: 9,
        photo: "mirageelyandra",
        nom : "MIRAGE ELYANDRA",
        played: 18,
        win: 6,
        lost: 12
    },
    {
        position: 10,
        photo: "teamoplon",
        nom : "TEAM OPLON",
        played: 18,
        win: 2,
        lost: 16
    }
]

const tableau = document.getElementById("tableau")
classement.forEach(element => {
    tableau.innerHTML += (`
           
                <tr class="border border-dark align-middle">     
                    <div class="logo d-flex align-items-middle"> 
                        <td class="fw-bold py-3">
                        <span class="m-3">${element["position"]}</span>
                        <span class="m-3"><img src="assets/${element["photo"]}.avif"></span>
                        <span class="m-3">${element["nom"]}</span>
                        </td>
                    </div>
                    
                    <div class="d-flex align-items-center align-middle">                       
                        <td class="py-3">
                        <td class="text-center">${element["played"]}</td>
                        <td class="text-center">${element["win"]}</td>
                        <td class="text-center">${element["lost"]}</td>
                    </div>
                </tr>            
    `)
});
let movies = document.getElementById("movies")

// fetch("./movies.json")
//     .then(response => {
//         return response.json();
//     })
//     .then(jsondata => console.log(jsondata));

fetch("movies.json")
    .then(reponse => reponse.json())
    .then(data => {
        data.results.forEach(element =>{
            movies.innerHTML +=  `<div class="card col-lg-3 col-11 m-1">
            <div class="row">
                <div class="col-6">
                    <img src='${element.poster_path}' class="card-img-top my-3" alt="poster image de film">
                </div>
                <div class="col-6">
                    <div class="card-body">
                        <p class="card-title fw-bold">${element.original_title}</p>
                        <p class="card-text snyopsis text-truncate">${element.overview}</p>
                        <p><i class="bi bi-star-fill etoile"></i>${element.vote_average}</p>
                    </div>
                </div>
            </div>
        </div>
            `
        }
        )
    })
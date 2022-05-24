let weather = document.getElementById("wheather")

fetch("http://api.openweathermap.org/data/2.5/forecast?id=3003796&appid=1ae8433d96c081474e7e3bae06a34991")
    .then(response => {
        return response.json()
    })
    .then(jsondata => console.log(jsondata))

fetch("http://api.openweathermap.org/data/2.5/forecast?id=3003796&appid=1ae8433d96c081474e7e3bae06a34991")
    .then(reponse => reponse.json())
    .then(data => {
        data.results = resultatsMeteo
        resultatsMeteo.forEach(element => {
            weather.innerHTML += `<div class="col-lg-4 col-10>
                ${element.city.name}
            </div>
            `
        })
    })
let weatherLH = document.getElementById("weatherLH")
let cardLH = document.getElementById("cardLH")
let weatherLondon = document.getElementById("weatherLondon")
let cardLondon = document.getElementById("cardLondon")

function displayHours(dateComplete) {
    let myDate = dateComplete.split(" ")
    let myHour = myDate[1].split(':')
    return myHour[0] + 'h' + myHour[1]
}

function displayDate(dateComplete) {
    let myMonths = ['Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet', 'Aout', 'Septembre', 'Octobre', 'Novembre', 'Décembre']
    let separateDate = dateComplete.split(" ")
    let dateOJD = separateDate[0].split('-')
    let mois = myMonths[parseInt(dateOJD[1]) - 1]
    // dateOJD[1] correspond au mois 
    return dateOJD[2] + ' ' + mois + ' ' + dateOJD[0]
}

fetch("http://api.openweathermap.org/data/2.5/forecast?id=3003796&appid=1ae8433d96c081474e7e3bae06a34991&lang=fr&units=metric")
    .then(response => {
        return response.json()
    })
    .then(data => {
        for (let i = 0; i <= 0; i++) {
            // let date = data['list'][i]['dt_txt']
            weatherLH.innerHTML += `
                <div class="col-lg-8 col-10 text-light m-2 main text-center rounded">
                    <div>
                        <div class="p-1">${displayDate(data['list'][i]['dt_txt'])}</div>
                        <div class="p-1">${displayHours(data['list'][i]['dt_txt'])}</div>
                    </div>
                    <div class="p-1">
                        <span><img src="http://openweathermap.org/img/wn/${data['list'][i]['weather'][0]['icon']}@2x.png"></span>
                    </div>
                    <div class="p-1">${data['list'][i]['main']['temp']} ° C</div>
                    <div class="p-1"><i class="bi bi-wind"></i> ${data['list'][i]['wind']['speed']} km/h </div> 
                </div>
            `
        }

        for (let i = 1; i <= 4; i++) {
            // console.log(data['list'][i]['weather'][0]['main'])
            // console.log(data['city']['name'])
            let date = data['list'][i]['dt_txt']
            let myDate = date.split(" ")
            cardLH.innerHTML += `
                <div class="card shadow-sm col-lg-2 col-10 m-1 blue rounded text-dark fw-bold">
                    <div class="p-1 text-center pink">${displayHours(data['list'][i]['dt_txt'])}</div>
                    <div class="p-1 text-center">${data['list'][i]['main']['temp']} ° C </div>
                    <div class="text-center"><img src="http://openweathermap.org/img/wn/${data['list'][i]['weather'][0]['icon']}.png"></div>
                    <div class="p-1 text-center"><i class="bi bi-wind"></i> ${data['list'][i]['wind']['speed']} km/h </div>

                <div> 
            `
        }
    })

fetch("http://api.openweathermap.org/data/2.5/forecast?id=2643743&appid=1ae8433d96c081474e7e3bae06a34991&lang=fr&units=metric")
    .then(response => {
        return response.json()
    })
    .then(data => {
        for (let i = 0; i <= 0; i++) {
            // let date = data['list'][i]['dt_txt']
            weatherLondon.innerHTML += `
            
                <div class="col-lg-8 col-10 text-light  m-2 main text-center rounded">
                    <div>
                        <div class="p-1">${displayDate(data['list'][i]['dt_txt'])}</div>
                        <div class="p-1">${displayHours(data['list'][i]['dt_txt'])}</div>
                    </div>
                    <div class="p-1">
                        <span><img src="http://openweathermap.org/img/wn/${data['list'][i]['weather'][0]['icon']}@2x.png"></span>
                    </div>
                    <div class="p-1">${data['list'][i]['main']['temp']} ° C</div>
                    <div class="p-1"><i class="bi bi-wind"></i> ${data['list'][i]['wind']['speed']} km/h </div> 
                </div>
            `
        }

        for (let i = 1; i <= 4; i++) {
            // console.log(data['list'][i]['weather'][0]['main'])
            // console.log(data['city']['name'])
            let date = data['list'][i]['dt_txt']
            let myDate = date.split(" ")
            cardLondon.innerHTML += `
            
                <div class="card shadow-sm col-lg-2 col-10 m-1 blue rounded text-dark fw-bold">
                    <div class="p-1 text-center pink">${displayHours(data['list'][i]['dt_txt'])}</div>
                    
                    <div class="p-1 text-center">${data['list'][i]['main']['temp']} ° C </div>
                    <div class="text-center"><img src="http://openweathermap.org/img/wn/${data['list'][i]['weather'][0]['icon']}.png"></div>
                    <div class="p-1 text-center"><i class="bi bi-wind"></i> ${data['list'][i]['wind']['speed']} km/h </div>

                <div> 
            `
        }
    })

function vosFav() {
    let favoris = document.getElementById('favoris');
    let landingPage = document.getElementById('landingPage')
    landingPage.style.display = 'none'
    favoris.style.display = 'block';
}

function retourMaison() {
    let favoris = document.getElementById('favoris');
    let landingPage = document.getElementById('landingPage')
    landingPage.style.display = 'block'
    favoris.style.display = 'none';
}
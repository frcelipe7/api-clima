navigator.geolocation.getCurrentPosition((pos) => {
    let lat = pos.coords.latitude
    let long = pos.coords.longitude
    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&units=imperial&APPID=0ed99f0c6edee4e2d077b34341618e9a`)
    .then(response => response.json())
    .then(api => {
        console.log(api);
        document.querySelector(".cidade").innerHTML = `Cidade: ${api.name}`;
        let tempInCelsius = ((5/9) * (api.main.temp-32)).toFixed(1)
        document.querySelector(".temperatura").innerHTML = `Temperatura: ${tempInCelsius} ºC`
    })
})


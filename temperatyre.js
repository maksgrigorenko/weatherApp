const API_KEY = "360f9155ba871e8e8751e158e8ad588b"

document.addEventListener("DOMContentLoaded", () => {

    let weatherButton = document.querySelector("#weatherButton")
    let weartherInput = document.querySelector("#weatherInput")
    let cityTitle = document.querySelector("#city")
    let te = document.querySelector("#te")
    let vl = document.querySelector("#vl")
    let dv = document.querySelector("#dv")
    let weatherImg = document.querySelector("#weatherImg")
    let loader = document.querySelector("#loader")





    async function getWeather() {
        let citi = weartherInput.value;
        loader.classList.remove("hide")
        try {
            let response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${citi}&appid=${API_KEY}&units=metric&lang=ru`);
            let data = await response.json();
            
            if(response.ok) {
                showData(data);
            } else {
                throw new Error(data.message);
            }

            loader.classList.add("hide")

            console.log(vl);
           
            console.log(data)
        } catch (error) {
            loader.classList.add("hide")
            if(error.message === "city not found") {
                alert("Вы указаси неверный город")
            } else {
            alert("гсервер перегружен попробуйте поже")
            }
        }

function showData(data){
    let icon = data.weather[0].icon;
    weatherImg.src = `https://openweathermap.org/img/wn/${icon}@4x.png`
    cityTitle.textContent = data.name
    weatherDescription.textContent = data.weather[0].description
    te.textContent = `Температура: ${data.main.temp}°C`;
    vl.textContent = `Влажность: ${data.main.humidity}`
    dv.textContent = `Довление: ${data.main.pressure}`
    }
    }

    weatherButton.addEventListener("click", getWeather)


})

















































































































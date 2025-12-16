let btn = document.querySelector('#btn');
let city = document.querySelector("#city");
let cityname = document.querySelector("#cityName");
let temp = document.querySelector("#temp");
let desc = document.querySelector("#desc");

let apiKey = "da92b3c3bc66d91858bc78ec0ea08894";

btn.addEventListener("click", function () {

    if (city.value === "") {
        alert("Please enter city name");
        return;
    }

    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city.value}&appid=${apiKey}&units=metric`;

    fetch(url)
        .then(function (res) {
            return res.json();
        })
        .then(function (data) {

            if (data.cod === "404") {
                alert("City not found");
                return;
            }

            cityname.textContent = data.name;
            temp.textContent = `Temperature: ${data.main.temp} °C`;
            desc.textContent = data.weather[0].description;
        });
});

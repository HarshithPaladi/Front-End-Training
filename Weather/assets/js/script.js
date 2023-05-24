async function getWeatherInfo() {
    const apiKey = "89727fd78420e93cc55a572c11542774";
    const city = document.getElementById("city").value;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
    document.getElementById("cityName").innerHTML = data.name;
    document.getElementById("temp").innerHTML = data.main.temp;
    document.getElementById("minTemp").innerHTML = data.main.temp_min;
    document.getElementById("maxTemp").innerHTML = data.main.temp_max;
    document.getElementById("weather").innerHTML = data.weather[0].main;
    document.getElementById("weatherIcon").src = `http://openweathermap.org/img/w/${data.weather[0].icon}.png`;
    document.getElementById("weatherIcon").alt = data.weather[0].main;
    document.getElementById("weatherIcon").title = data.weather[0].main;
    document.getElementById("weatherIcon").style.display = "block";

    // get next daily weather forecast for 5 days
    const forecastUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=metric`;
    const response3 = await fetch(forecastUrl);
    const data3 = await response3.json();
    console.log(data3);
    // use for loop to get the next 5 days weather forecast
    for (let i = 0; i < 5; i++) {
        document.getElementById(`day${i+1}`).innerHTML = data3.list[i*8].dt_txt;
        document.getElementById(`day${i+1}Temp`).innerHTML = data3.list[i*8].main.temp;
        document.getElementById(`day${i+1}Weather`).innerHTML = data3.list[i*8].weather[0].main;
        document.getElementById(`day${i+1}WeatherIcon`).src = `http://openweathermap.org/img/w/${data3.list[i*8].weather[0].icon}.png`;
        document.getElementById(`day${i+1}WeatherIcon`).alt = data3.list[i*8].weather[0].main;
        document.getElementById(`day${i+1}WeatherIcon`).title = data3.list[i*8].weather[0].main;
        document.getElementById(`day${i+1}WeatherIcon`).style.display = "block";
    }
}
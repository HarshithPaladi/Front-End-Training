async function getWeatherInfo() {
    const apiKey = "89727fd78420e93cc55a572c11542774";
    const city = document.getElementById("cityDropdown").value;

    // get current weather

    const currentUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    const currentResponse = await fetch(currentUrl);
    const currentData = await currentResponse.json();

    console.log(currentData);

    const currentWeather = `
                    <div class="card-header">
                        <h3>${currentData.name}</h3>
                    </div>
                    <div class="current-weather">
                    <h4>Current Weather</h4>
                    <ul>
                        <li><strong>Condition:</strong> ${currentData.weather[0].description}</li>
                        <li><strong>Temperature:</strong> ${currentData.main.temp}°C</li>
                        <li><strong>Feels like:</strong> ${currentData.main.feels_like}°C</li>
                        <!--
                        <li><strong>Min:</strong> ${currentData.main.temp_min}°C</li>
                        <li><strong>Max:</strong> ${currentData.main.temp_max}°C</li>
                        <li><strong>Humidity:</strong> ${currentData.main.humidity}%</li>
                        <li><strong>Wind:</strong> ${currentData.wind.speed} km/h</li>
                        <li><strong>Visibility:</strong> ${currentData.visibility / 1000} km</li>
                        -->
                    </ul>
                        <img class="weather-icon" src="http://openweathermap.org/img/w/${currentData.weather[0].icon}.png" alt="${currentData.weather[0].main}" title="${currentData.weather[0].main}">
                    </div>
                `;
    document.getElementById("currentWeather").innerHTML = currentWeather;


    // get next daily weather forecast for 5 days

    const forecastUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=metric`;
    const forecastResponse = await fetch(forecastUrl);
    const forecastData = await forecastResponse.json();

    console.log(forecastData);

    const forecastWeather = forecastData.list.filter(weather => weather.dt_txt.includes("12:00:00"));
    console.log(forecastWeather);

    const forecastItems = forecastWeather.map(weather => `
                    <li class="forecast-item">
                    <h4>${new Date(weather.dt_txt).toLocaleDateString('en-US', { day: 'numeric', month: 'short' })}</h4>
                        <div class="weather-details">
        <p class="temperature">${weather.main.temp}°C</p>
        <img class="forecast-icon" src="http://openweathermap.org/img/w/${weather.weather[0].icon}.png" alt="${weather.weather[0].main}" title="${weather.weather[0].main}">
                        </div>
                    </li>
                `).join("");

    document.getElementById("forecastWeather").innerHTML = forecastItems;







}
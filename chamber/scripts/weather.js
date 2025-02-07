const apiKey = '6a2646cdded8748d545ab013f219ec16'; // Replace with your OpenWeather API key
const city = 'Tijuana'; // Change to your preferred city
const units = 'metric'; // Use 'imperial' for Fahrenheit

const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=${units}&appid=${apiKey}`;
const forecastUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=${units}&cnt=24&appid=${apiKey}`; // 24 periods (3-hour intervals)

// Function to fetch current weather
async function fetchCurrentWeather() {
    try {
        const response = await fetch(weatherUrl);
        const data = await response.json();

        if (data.cod !== 200) {
            throw new Error(data.message);
        }

        const iconCode = data.weather[0].icon;
        const iconUrl = `https://openweathermap.org/img/wn/${iconCode}@2x.png`;

        document.getElementById('current-weather').innerHTML = `
            <h3>Current Weather</h3>
            <p><strong>${data.name}</strong></p>
            <img src="${iconUrl}" alt="${data.weather[0].description}" width="80">
            <p>${data.weather[0].description}</p>
            <p>🌡️ ${data.main.temp}°C (Feels like ${data.main.feels_like}°C)</p>
            <p>💨 Wind: ${data.wind.speed} m/s</p>
            <p>💧 Humidity: ${data.main.humidity}%</p>
        `;
    } catch (error) {
        console.error('Error fetching current weather:', error);
        document.getElementById('current-weather').innerHTML = `<p>Could not fetch weather data.</p>`;
    }
}

// Function to fetch 3-day forecast
async function fetchWeatherForecast() {
    try {
        const response = await fetch(forecastUrl);
        const data = await response.json();

        if (data.cod !== "200") {
            throw new Error(data.message);
        }

        let forecastHtml = `<h3>3-Day Forecast</h3>`;

        // Filter data to get the next 3 days at noon
        const forecastDays = {};
        data.list.forEach(item => {
            const date = new Date(item.dt_txt);
            const day = date.toLocaleDateString('en-US', { weekday: 'long' });

            if (!forecastDays[day] && date.getHours() === 12) {
                forecastDays[day] = item;
            }
        });

        Object.keys(forecastDays).slice(0, 3).forEach(day => {
            const item = forecastDays[day];
            const iconCode = item.weather[0].icon;
            const iconUrl = `https://openweathermap.org/img/wn/${iconCode}@2x.png`;

            forecastHtml += `
                <div class="forecast-day">
                    <p><strong>${day}</strong></p>
                    <img src="${iconUrl}" alt="${item.weather[0].description}" width="80">
                    <p>${item.weather[0].description}</p>
                    <p>🌡️ ${item.main.temp}°C</p>
                    <p>💨 Wind: ${item.wind.speed} m/s</p>
                    <p>💧 Humidity: ${item.main.humidity}%</p>
                </div>
            `;
        });

        document.getElementById('forecast').innerHTML = forecastHtml;
    } catch (error) {
        console.error('Error fetching forecast:', error);
        document.getElementById('forecast').innerHTML = `<p>Could not fetch forecast data.</p>`;
    }
}

// Call the functions when the page loads
document.addEventListener('DOMContentLoaded', () => {
    fetchCurrentWeather();
    fetchWeatherForecast();
});



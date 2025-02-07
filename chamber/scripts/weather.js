const weatherAPI = 'https://api.openweathermap.org/data/3.0/onecall?lat=32.5333&lon=-117.0167&units=metric&exclude=minutely,hourly&appid=6a2646cdded8748d545ab013f219ec16';

fetch(weatherAPI)
    .then(response => response.json())
    .then(data => {
        // Current weather
        const current = data.current;
        const weatherEvents = current.weather.map(event =>
            event.description.split(' ').map(word =>
                word.charAt(0).toUpperCase() + word.slice(1)
            ).join(' ')
        ).join(', ');

        document.getElementById('current-weather').innerHTML = `
            <p>Current: ${Math.round(current.temp)}°C</p>
            <p>${weatherEvents}</p>
        `;

        // 3-day forecast
        let forecastHTML = '<h3>3-Day Forecast</h3>';
        for (let i = 1; i <= 3; i++) { // Start from 1 to skip current day
            const day = data.daily[i];
            forecastHTML += `
                <div class="forecast-day">
                    <p>Day ${i}: ${Math.round(day.temp.day)}°C</p>
                </div>
            `;
        }
        document.getElementById('forecast').innerHTML = forecastHTML;
    })
    .catch(error => console.error('Error fetching weather:', error));
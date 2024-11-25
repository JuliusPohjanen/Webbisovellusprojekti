// Fetch the weather data from the API and display it on the page.
const apiKey = '196e629adc48ee756507bef85918cefe';
const city = 'Oulu,fi'; // Specify the city and country code (fi for Finland).
const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;

fetch(apiUrl)
  .then(response => response.json())
  .then(data => {
    const temperatureElement = document.getElementById('temperature');
    const weatherDescriptionElement = document.getElementById('weather-description');
    
    temperatureElement.textContent = (data.main.temp - 273.15).toFixed(2); // Convert to Celsius
    weatherDescriptionElement.textContent = data.weather[0].description;
  })
  .catch(error => {
    console.error('Error fetching weather data:', error);
  });


  

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './WeatherApp.css'; // Import a custom CSS file for styling

const WeatherApp = () => {
  const apiUrl = "https://api.openweathermap.org/data/2.5/weather";
  const apiForecastUrl = "https://api.openweathermap.org/data/2.5/forecast";
  const apiKey = "04c2da5ffc8ec18ecedd45d8daba00b7";

  const [city, setCity] = useState("Amman");
  const [weatherData, setWeatherData] = useState(null);
  const [forecastData, setForecastData] = useState([]);

  useEffect(() => {
    getWeatherData(city);
    getForecastData(city);
  }, [city]);

  const getWeatherData = (city) => {
    axios.get(apiUrl, {
      params: {
        q: city,
        appid: apiKey,
        units: "metric",
      },
    })
      .then((response) => {
        const weatherData = response.data;
        setWeatherData(weatherData);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const getForecastData = (city) => {
    axios.get(apiForecastUrl, {
      params: {
        q: city,
        appid: apiKey,
        units: "metric",
      },
    })
      .then((response) => {
        const forecastData = response.data.list;

        // Filter and group forecast data by day
        const groupedForecastData = forecastData.reduce((result, forecast) => {
          const date = forecast.dt_txt.split(' ')[0];
          if (!result[date]) {
            result[date] = {
              date,
              temp: forecast.main.temp,
              weather: forecast.weather[0].description,
            };
          } else {
            // Update the temperature to the highest value for the day
            if (forecast.main.temp > result[date].temp) {
              result[date].temp = forecast.main.temp;
            }
          }
          return result;
        }, {});

        // Convert the grouped forecast data into an array
        const forecastArray = Object.values(groupedForecastData);
        setForecastData(forecastArray);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const handleCityChange = (event) => {
    setCity(event.target.value);
  };

  // Function to get the name of the day based on the date
  const getDayName = (dateString) => {
    const date = new Date(dateString);
    const options = { weekday: 'long' };
    return date.toLocaleDateString('en-US', options);
  };

  return (
    <div>
      <div className="date-container">
        <h2 className="date-dayname">{weatherData ? getDayName(weatherData.dt * 1000) : 'Loading...'}</h2>
        <span className="date-day">{weatherData ? new Date(weatherData.dt * 1000).toLocaleDateString('en-US', { day: 'numeric', month: 'short', year: 'numeric' }) : 'Loading...'}</span>
        <i className="location-icon" data-feather="map-pin"></i>
        <span className="location">{city}, FR</span>
      </div>
      <div className="location-container">
        <select className="location-select" value={city} onChange={handleCityChange}>
          <option className="location-option" value="Amman">Amman</option>
          <option className="location-option" value="Irbid">Irbid</option>
          <option className="location-option"value="Ajloun">Ajloun</option>
          <option className="location-option"value="Mafraq">Mafraq</option>
          <option className="location-option"value="Jerash">Jerash</option>
          <option className="location-option"value="Balqa">Balqa</option>
          <option className="location-option"value="Maan">Maan</option>
          <option className="location-option"value="Madaba">Madaba</option>
          <option className="location-option"value="Tafila">Tafila</option>
          <option className="location-option"value="Karak">Karak</option>
          <option className="location-option"value="Aqaba">Aqaba</option>
          <option className="location-option"value="Zarqa">Zarqa</option>
        </select>
      </div>
      <div className="weather-info-container">
        <i className="weather-icon" data-feather="sun"></i>
        <h1 className="weather-temp">{weatherData ? `${weatherData.main.temp}°C` : 'Loading...'}</h1>
        <h3 className="weather-desc">{weatherData ? weatherData.weather[0].description : 'Loading...'}</h3>
      </div>
      <div className="info-side">
        <div className="forecast-container">
          {/* <ul className="forecast-list">
            {forecastData.map((forecast, index) => (
              <li key={index} className="forecast-item">
                <i className="forecast-icon" data-feather="sun"></i>
                <span className="forecast-day">{getDayName(forecast.date)}</span>
                <span className="forecast-temp">{forecast.temp}°C</span>
              </li>
            ))}
          </ul> */}
        </div>
      </div>
    </div>
  );
};

export default WeatherApp;

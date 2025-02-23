import React, { useState } from "react";
import axios from "axios";
import {
  FaSearch,
  FaCloud,
  FaCloudRain,
  FaSnowflake,
  FaSun,
  FaSmog,
  FaWind,
  FaTint,
  FaTemperatureHigh,
} from "react-icons/fa";
import "./WeatherApp.css";

const WeatherApp = () => {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState(null);

  const API_KEY = "5545f9322e95a8998ea75fbdc2cc2ee2";

  const fetchWeather = async () => {
    if (!city) return;

    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`
      );
      setWeather(response.data);
      setError(null);
    } catch (err) {
      setWeather(null);
      setError("City not found. Try again!");
    }
  };

  const getWeatherIcon = () => {
    if (!weather) return <FaSun size={50} color="#FFD700" />;
    const main = weather.weather[0].main;

    switch (main) {
      case "Clouds":
        return <FaCloud size={50} color="#B0C4DE" />;
      case "Rain":
        return <FaCloudRain size={50} color="#4682B4" />;
      case "Snow":
        return <FaSnowflake size={50} color="#00BFFF" />;
      case "Haze":
      case "Mist":
        return <FaSmog size={50} color="#A9A9A9" />;
      default:
        return <FaSun size={50} color="#FFD700" />;
    }
  };

  const getBackgroundImage = () => {
    if (!weather) return "default.jpg";
    const main = weather.weather[0].main;

    switch (main) {
      case "Clouds":
        return "clouds.jpg";
      case "Rain":
        return "rain.jpg";
      case "Snow":
        return "snow.jpg";
      case "Haze":
      case "Mist":
        return "haze.jpg";
      default:
        return "clear.jpg";
    }
  };

  return (
    <div className="weather-container" style={{ backgroundImage: `url(${getBackgroundImage()})` }}>
      <div className="weather-box">
        <div className="search-box">
          <input
            type="text"
            placeholder="Enter city name..."
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />
          <button onClick={fetchWeather}>
            <FaSearch size={20} />
          </button>
        </div>

        {error && <p className="error">{error}</p>}

        {weather && (
          <div className="weather-info">
            <h2>{weather.name}, {weather.sys.country}</h2>
            {getWeatherIcon()}
            <h3>{weather.main.temp}°C</h3>
            <p>{weather.weather[0].description}</p>

            <div className="extra-info">
              <div className="info-box">
                <FaWind size={20} /> <span>Wind: {weather.wind.speed} m/s</span>
              </div>
              <div className="info-box">
                <FaTint size={20} /> <span>Humidity: {weather.main.humidity}%</span>
              </div>
              <div className="info-box">
                <FaTemperatureHigh size={20} /> <span>Feels like: {weather.main.feels_like}°C</span>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default WeatherApp;

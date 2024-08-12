import React, { useEffect, useState } from "react";
import "./Weather.css";
import search_icon from "../assets/search.png";
import clear_icon from "../assets/clear.png";
import cloud_icon from "../assets/cloud.png";
import drizzle_icon from "../assets/drizzle.png";
import humidity_icon from "../assets/humidity.png";
import rain_icon from "../assets/rain.png";
import snow_icon from "../assets/snow.png";
import wind_icon from "../assets/wind.png";

const Weather = () => {
  const [weatherData, setWeatherData] = useState(false);
  const search = async (city) => {
    try {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${
        import.meta.env.VITE_APP_ID
      }`;

      const response = await fetch(url);
      const data = await response.json();
      console.log(data);
      setWeatherData({
        humidity: data.main.humidity,
        windSpeed: data.main.speed,
        temperature: Math.floor(data.main.temp),
        location: data.name,
      });
    } catch (error) {}
  };

  useEffect(() => {
    search("Patna");
  }, []);

  return (
    <div className="weather">
      <div className="search-bar">
        <input type="text" placeholder="Search" />
        <img src={search_icon} alt="" />
      </div>
      <img src={clear_icon} alt="" className="weather-icon" />
      <p className="temperature">20°C</p>
      <p className="location">Bihar</p>
      <div className="weather-data">
        <div className="col">
          <img src={humidity_icon} alt="" />
        </div>
        <p>91 %</p>
        <span>Humidity</span>

        <div className="col">
          <img src={wind_icon} alt="" />
        </div>
        <p>5 km/h</p>
        <span>Wind Speed</span>
      </div>
    </div>
  );
};

export default Weather;

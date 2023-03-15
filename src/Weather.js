import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";

export default function Weather(props) {
  const [loaded, setLoaded] = useState(false);
  const [weather, setWeather] = useState({});

  function getResponse(response) {
    console.log(response);
    setLoaded(true);
    setWeather({
      cityName: response.data.city,
      country: response.data.country,
      time: response.data.time,
      image: response.data.condition.icon_url,
      imageDescription: response.data.condition.description,
      imageName: response.data.condition.icon,
      temperature: response.data.temperature.current,
      wind: response.data.wind.speed,
      humidity: response.data.temperature.humidity,
      pressure: response.data.temperature.pressure,
    });
  }

  if (loaded) {
    return (
      <div className="Weather">
        <form>
          <input
            type="search"
            placeholder="Enter a city..."
            autoFocus="on"
            className="search"
          />
          <input type="submit" value="Search" className="button" />
        </form>
        <div className="m-4 fs-1">
          {weather.cityName}
          <br />
          🗺 {weather.country}
        </div>
        <h4>{weather.time} </h4>
        <div className="row weatherIndex">
          <div className="col">
            <img src={weather.image} alt={weather.imageName} width="150px" />
            <div className="text-capitalize">{weather.imageDescription}</div>
          </div>
          <div className="col temperature">
            {Math.round(weather.temperature)}
            <span className="celsius">°C</span>
          </div>
          <div className="col">
            <ul>
              <li>Wind: {weather.wind} km/h</li>
              <li>Humidity: {weather.humidity}%</li>
              <li>Pressure: {weather.pressure}mb</li>
            </ul>
          </div>
        </div>
      </div>
    );
  } else {
    const apiKey = `90a3822d88740dfa4e667ccot8cebf7b`;
    const city = props.city;
    const apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
    axios.get(apiUrl).then(getResponse);

    return "Loading...";
  }
}

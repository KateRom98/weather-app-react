import React, { useState } from "react";
import axios from "axios";
import FormattedDate from "./FormattedDate";
import WeatherInfo from "./WeatherInfo";
import WeatherForecast from "./WeatherForecast";
import "./Weather.css";

export default function Weather(props) {
  const [loaded, setLoaded] = useState(false);
  const [weather, setWeather] = useState({});
  const [city, setCity] = useState(props.defaultCity);

  function getResponse(response) {
    console.log(response);
    setLoaded(true);
    setWeather({
      cityName: response.data.city,
      country: response.data.country,
      time: new Date(response.data.time * 1000),
      image: response.data.condition.icon_url,
      imageDescription: response.data.condition.description,
      imageName: response.data.condition.icon,
      temperature: response.data.temperature.current,
      wind: response.data.wind.speed,
      humidity: response.data.temperature.humidity,
      pressure: response.data.temperature.pressure,
    });
  }

  function searchCity() {
    const apiKey = `90a3822d88740dfa4e667ccot8cebf7b`;
    const apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
    axios.get(apiUrl).then(getResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    searchCity();
  }

  function updateCity(event) {
    setCity(event.target.value);
  }

  if (loaded) {
    return (
      <div className="Weather">
        <form onSubmit={handleSubmit} className="d-flex justify-content-center">
          <input
            type="search"
            placeholder="Enter a city..."
            autoFocus="on"
            className="search"
            onChange={updateCity}
          />
          <input type="submit" value="Search" className="button" />
        </form>
        <div className="m-4 fs-1">
          {weather.cityName}
          <br />
          🗺 {weather.country}
        </div>
        <h4>
          <FormattedDate date={weather.time} />
        </h4>
        <WeatherInfo data={weather} />
        <WeatherForecast query={weather.cityName} />
      </div>
    );
  } else {
    searchCity();

    return "Loading...";
  }
}

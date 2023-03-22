import React, { useState } from "react";
import WeatherForecastDay from "./WeatherForecastDay";
import "./WeatherForecast.css";
import axios from "axios";

export default function WeatherForecast(props) {
  const [loaded, setLoaded] = useState(false);
  const [forecast, setForecast] = useState(null);
  function handleResponse(response) {
    setForecast(response.data.daily[1]);
    setLoaded(true);
  }

  if (loaded) {
    return (
      <div className="WeatherForecast">
        <div className="row">
          <div className="col">
            <WeatherForecastDay data={forecast} />
          </div>
        </div>
      </div>
    );
  } else {
    let apiKey = `90a3822d88740dfa4e667ccot8cebf7b`;
    let queryCity = props.query;
    let apiUrl = `https://api.shecodes.io/weather/v1/forecast?query=${queryCity}&key=${apiKey}`;
    axios.get(apiUrl).then(handleResponse);
    return null;
  }
}

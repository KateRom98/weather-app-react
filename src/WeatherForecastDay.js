export default function WeatherForecastDay(props) {
  function day() {
    let date = new Date(props.data.time * 1000);
    let days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
    let day = date.getDay();
    return days[day];
  }

  function max() {
    let maxTemp = Math.round(props.data.temperature.maximum);
    return `${maxTemp}° /`;
  }

  function min() {
    let minTemp = Math.round(props.data.temperature.minimum);
    return `${minTemp}°`;
  }

  return (
    <div className="WeatherForecastDay">
      <div className="WeatherForecast-day">{day()}</div>
      <img
        src={props.data.condition.icon_url}
        alt={props.data.condition.description}
      />
      <div className="WeatherForecast-temp">
        <span className="WeatherForecast-temp-max">{max()}</span>
        <span className="WeatherForecast-temp-min">{min()}</span>
      </div>
    </div>
  );
}

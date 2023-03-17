export default function WeatherInfo(props) {
  return (
    <div className="row weatherIndex">
      <div className="col">
        <img src={props.data.image} alt={props.data.imageName} width="150px" />
        <div className="text-capitalize">{props.data.imageDescription}</div>
      </div>
      <div className="col temperature">
        {Math.round(props.data.temperature)}
        <span className="celsius">°C</span>
      </div>
      <div className="col">
        <ul>
          <li>Wind: {props.data.wind} km/h</li>
          <li>Humidity: {props.data.humidity}%</li>
          <li>Pressure: {props.data.pressure}mb</li>
        </ul>
      </div>
    </div>
  );
}

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <h1 className="text-center m-5">Weather</h1>
        <Weather city="New York" />
        <footer>
          This website was built by{" "}
          <a
            href="https://magenta-pika-c7a68c.netlify.app/"
            target="_blank"
            rel="noreferrer"
          >
            {" "}
            Kateryna Dibtsova
          </a>{" "}
          and
          <a
            href="https://github.com/KateRom98/weather-app-react"
            target="_blank"
            rel="noreferrer"
          >
            {" "}
            is open-sourced on GitHub
          </a>
        </footer>
      </div>
    </div>
  );
}

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <h1 className="text-center m-5">Weather</h1>
        <Weather />
        <footer>
          This website was built by{" "}
          <a href="https://magenta-pika-c7a68c.netlify.app/">
            {" "}
            Kateryna Dibtsova
          </a>{" "}
          and is open-sourced on GitHub
        </footer>
      </div>
    </div>
  );
}

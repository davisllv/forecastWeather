import { useState } from "react";

import api from "./services/api";

const App = () => {
  const [nameCity, setNameCity] = useState("");

  const handleCallApiWeather = async () => {
    const response = await api.get("", {
      params: {
        city_name: nameCity,
      },
    });

    console.log(response);
  };
  return (
    <div className="container">
      <div className="container-content">
        <div className="container-content-data">
          <p className="hour">
            22:38<b className="system-hour">am</b>
          </p>
          <p className="date">Sexta, 02 Fevereiro 2023</p>
        </div>

        <div className="container-input-values">
          <input type="text" />
          <p className="city-name">Caxias do Sul</p>
        </div>
      </div>

      <footer className="container-days">
        <ul>
          <li className="badge-day">Sex</li>
          <li className="badge-values">
            <span className="max-value">18º</span>
            <span className="min-value">10º</span>
          </li>
          <li className="badge-icon">
            <img
              src="https://assets.hgbrasil.com/weather/icons/conditions/rain.svg"
              alt="Rain"
            />
          </li>
        </ul>
      </footer>
    </div>
  );
};

export default App;

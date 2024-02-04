import React from "react";
import { IDataForecastInterface } from "../../../interfaces/IDataResponseInterface";
import "./styles.scss";

const Days: React.FC<{ weather: IDataForecastInterface }> = ({ weather }) => {
  return (
    <>
      <li className="line-day">
        <p className="badge-day">{weather.weekday}</p>
        <div className="badge-values">
          <span className="max-value">{weather.max}º</span>
          <span className="min-value">{weather.min}º</span>
        </div>
        <img
          src={`https://assets.hgbrasil.com/weather/icons/conditions/${weather.condition}.svg`}
          alt="Rain"
        />
      </li>
    </>
  );
};

export default Days;

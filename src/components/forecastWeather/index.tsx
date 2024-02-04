import React from "react";
import "./styles.scss";
import { IDataForecastInterface } from "../../interfaces/IDataResponseInterface";
import Days from "./days";

interface IForecastWeatherDays {
  forecastWeatherList?: IDataForecastInterface[];
}

const ForecastWeather: React.FC<IForecastWeatherDays> = ({
  forecastWeatherList,
}) => {
  return (
    <footer className="container-footer">
      <ul className="container-days">
        {forecastWeatherList?.map((weather) => (
          <Days weather={weather} />
        ))}
        {/* <li className="line-day">
          <p className="badge-day">Sex</p>
          <div className="badge-values">
            <span className="max-value">18º</span>
            <span className="min-value">10º</span>
          </div>
          <img
            src="https://assets.hgbrasil.com/weather/icons/conditions/rain.svg"
            alt="Rain"
          />
        </li> */}
      </ul>
    </footer>
  );
};

export default ForecastWeather;

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
          <Days key={weather.date} weather={weather} />
        ))}
      </ul>
    </footer>
  );
};

export default ForecastWeather;

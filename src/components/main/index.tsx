import { useState } from "react";
import api from "../../services/api";
import Content from "../content";
import ForecastWeather from "../forecastWeather";
import "./styles.scss";
import { IDataResponseInterface } from "../../interfaces/IDataResponseInterface";

const Main = () => {
  const [data, setData] = useState<IDataResponseInterface>({} as any);

  const handleFormatValues = (data: any): IDataResponseInterface => {
    console.log(data);
    const splitedDate = data.date.split("/");
    const formatedDate = new Date(
      splitedDate[2],
      splitedDate[1] - 1,
      splitedDate[0]
    ).toLocaleDateString("pt-BR", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    });
    const dateTimeSplited = Number(data.time.split(":")[0]);
    const formatedValues: IDataResponseInterface = {
      ...data,
      city: data.city,
      condition: data.condition_slug,
      date: formatedDate.charAt(0).toUpperCase() + formatedDate.slice(1),
      systemHour: dateTimeSplited < 13 ? "am" : "pm",
    };

    return formatedValues;
  };

  const handleCallApiWeather = async (nameCity: string) => {
    const response = await api.get("", {
      params: {
        city_name: nameCity,
      },
    });

    if (
      response.data.results.city_name.toLocaleUpperCase() !==
      nameCity.toLocaleUpperCase()
    ) {
      alert("Errado");
      return;
    }

    // console.log(handleFormatValues(response.data.results));
    setData(handleFormatValues(response.data));
  };
  return (
    <div className="container">
      <Content onClickSearchCity={handleCallApiWeather} />
      <ForecastWeather forecastWeatherList={data.forecast} />
    </div>
  );
};

export default Main;

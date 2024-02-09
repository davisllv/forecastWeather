import { useEffect, useState } from "react";
import api from "../../services/api";
import Content from "../content";
import ForecastWeather from "../forecastWeather";
import "./styles.scss";
import { IDataResponseInterface } from "../../interfaces/IDataResponseInterface";
import useLoaderBackdrop from "../../hook/useLoaderBackdrop";
import { toast } from "react-toastify";

const Main = () => {
  const [data, setData] = useState<IDataResponseInterface>({} as any);

  const { setIsLoading, isLoading } = useLoaderBackdrop();

  const handleFormatValues = (data: any): IDataResponseInterface => {
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
      hour: data.time,
      systemHour: dateTimeSplited < 13 ? "am" : "pm",
      forecast: data.forecast.splice(0, 7),
    };
    return formatedValues;
  };

  const handleCallApiWeather = async (nameCity: string) => {
    try {
      setIsLoading(true);

      const response = await api.get("", {
        params: {
          city_name: nameCity,
        },
      });

      if (
        response.data.results.city_name.toLocaleUpperCase() !==
        nameCity.toLocaleUpperCase()
      ) {
        toast.error("City has not been found");
        setIsLoading(false);
        return;
      }

      setData(handleFormatValues(response.data.results));

      setIsLoading(false);
    } catch (err: any) {
      toast.error(err.message)
    }
  };

  useEffect(() => {
    handleCallApiWeather("São Paulo");
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="container">
      <Content onClickSearchCity={handleCallApiWeather} values={data} />
      <ForecastWeather forecastWeatherList={data.forecast} />
      {isLoading && (
        <div className="loader-main">
          <div className="loader"></div>
        </div>
      )}
    </div>
  );
};

export default Main;

import api from "../../services/api";
import Content from "../content";
import ForecastWeather from "../forecastWeather";
import "./styles.scss";

const Main = () => {
  const handleCallApiWeather = async (nameCity: string) => {
    const response = await api.get("", {
      params: {
        city_name: nameCity,
      },
    });

    console.log(response);
  };
  return (
    <div className="container">
      <Content onClickSearchCity={handleCallApiWeather} />
      <ForecastWeather />
    </div>
  );
};

export default Main;

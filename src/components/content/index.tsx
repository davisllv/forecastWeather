import React, { useState } from "react";
import { FcSearch } from "react-icons/fc";
import "./styles.scss";
import { IDataResponseInterface } from "../../interfaces/IDataResponseInterface";
import { toast } from "react-toastify";

interface IContentProps {
  onClickSearchCity: (nameCity: string) => Promise<void>;
  values: Omit<IDataResponseInterface, "forecast">;
}

const Content: React.FC<IContentProps> = ({ onClickSearchCity, values }) => {
  const [cityName, setCityName] = useState("");

  const handleSubmit = () => {
    if(!cityName){
      toast.error("Please enter city name");
      return;
    }

    onClickSearchCity(cityName)
  }

  return (
    <div className="container-content">
      <div className="container-content-data">
        <h2 className="data-hour">
          {values.hour}
          <b className="system-hour">{values.systemHour}</b>
        </h2>
        <p className="date">{values.date}</p>
      </div>

      <div className="container-values">
        <div className="container-btn-inpt">
          <input
            type="text"
            placeholder="Digite o nome da Sua Cidade!"
            onChange={(event) => setCityName(event.currentTarget.value)}
          />
          <button
            type="button"
            onClick={handleSubmit}
          >
            <FcSearch size={18} className="icon-bt" />
          </button>
        </div>

        {!!values.city && (
          <>
            <p className="city-name">{values.city}</p>
            <p className="country-name">Brasil</p>
          </>
        )}
      </div>
    </div>
  );
};

export default Content;

import React, { useState } from "react";
import { FcSearch } from "react-icons/fc";
import "./styles.scss";

interface IContentProps {
  onClickSearchCity: (nameCity: string) => Promise<void>;
}

const Content: React.FC<IContentProps> = ({ onClickSearchCity }) => {
  const [cityName, setCityName] = useState("");
  return (
    <div className="container-content">
      <div className="container-content-data">
        <h2 className="data-hour">
          22:38<b className="system-hour">am</b>
        </h2>
        <p className="date">Sexta, 02 Fevereiro 2023</p>
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
            onClick={() => {
              onClickSearchCity(cityName);
            }}
          >
            <FcSearch size={18} className="icon-bt" />
          </button>
        </div>

        <p className="city-name">Caxias do Sul</p>
        <p className="country-name">Brasil</p>
      </div>
    </div>
  );
};

export default Content;

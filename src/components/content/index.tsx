import React, { useState } from "react";
import "./styles.scss";

interface IContentProps {
  onClickSearchCity: (nameCity: string) => Promise<void>;
}

const Content: React.FC<IContentProps> = ({ onClickSearchCity }) => {
  const [cityName, setCityName] = useState("");
  return (
    <div className="container-content">
      <div className="container-content-data">
        <p className="hour">
          22:38<b className="system-hour">am</b>
        </p>
        <p className="date">Sexta, 02 Fevereiro 2023</p>
      </div>

      <div className="container-input-values">
        <input
          type="text"
          onChange={(event) => setCityName(event.currentTarget.value)}
        />
        <p className="city-name">Caxias do Sul</p>
      </div>
    </div>
  );
};

export default Content;

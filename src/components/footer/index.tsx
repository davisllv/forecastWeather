import React from "react";
import "./styles.scss";

const Footer = () => {
  return (
    <footer className="container-footer">
      <ul className="container-days">
        <li className="line-day">
          <p className="badge-day">Sex</p>
          <div className="badge-values">
            <span className="max-value">18º</span>
            <span className="min-value">10º</span>
          </div>
          <img
            src="https://assets.hgbrasil.com/weather/icons/conditions/rain.svg"
            alt="Rain"
          />
        </li>
      </ul>
    </footer>
  );
};

export default Footer;

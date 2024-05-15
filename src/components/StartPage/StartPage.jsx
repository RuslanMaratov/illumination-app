import React, { useState } from "react";
import logo from "../../assets/logo.png";
import name from "../../assets/name.png";
import "./StartPage.scss";
import { useNavigate } from "react-router-dom";
import kgeu from "../../assets/kgeu.jpg";
import welcome from "../../assets/welcome.jpg";
import years from "../../assets/55years.png";

const StartPage = () => {
  let navigate = useNavigate();
  let start = () => {
    setIsStart(true);
    setTimeout(() => navigate("options"), 10000);
  };
  let [isStart, setIsStart] = useState(false);

  return (
    <div className="startPage-container">
      <div className="startPage-logos">
        <img className="kgeuImg" src={kgeu} alt="kgeu" />
        <img
          src={logo}
          className={isStart ? "spin-logo" : "app-logo"}
          alt="logo"
        />
        <img className="welcome" src={welcome} alt="welcome" />
      </div>
      <img src={name} className="logo-name" alt="logo" />
      {isStart ? (
        <p className="loading">ЗАГРУЗКА ...</p>
      ) : (
        <button onClick={start} className="start-btn">
          ЗАПУСТИТЬ
        </button>
      )}
      <footer className="footer">
        <div className="footer-container">
          <p>CREATED BY RUSLAN MARATOV</p>
          <img className="years" src={years} alt="55 years" />
          <p>©2024 KAZAN, ALL RIGHTS RESERVED</p>
        </div>
      </footer>
    </div>
  );
};

export default StartPage;

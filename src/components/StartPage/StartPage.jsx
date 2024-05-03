import React, { useState } from "react";
import logo from "../../assets/logo.png";
import name from "../../assets/name.png";
import "./StartPage.scss";
import { useNavigate } from "react-router-dom";

const StartPage = () => {
  let navigate = useNavigate();
  let start = () => {
    setIsStart(true);
    setTimeout(() => navigate("options"), 10000);
  };
  let [isStart, setIsStart] = useState(false);

  return (
    <div className="startPage-container">
      <img
        src={logo}
        className={isStart ? "spin-logo" : "app-logo"}
        alt="logo"
      />
      <img src={name} className="logo-name" alt="logo" />
      {isStart ? (
        <p className="loading">ЗАГРУЗКА ...</p>
      ) : (
        <button onClick={start} className="start-btn">
          ЗАПУСТИТЬ
        </button>
      )}
    </div>
  );
};

export default StartPage;

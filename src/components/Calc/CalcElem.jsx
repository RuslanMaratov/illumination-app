import React, { useState, useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import room from "../../assets/room.jpg";
import { Link } from "react-router-dom";
import linkImg from "../../assets/link.png";
import { openModal } from "../../features/options/optionsSlice";
import Modal from "../Modal/Modal";

const CalcElem = () => {
  const dispatch = useDispatch();
  const S = useSelector((state) => state.calc.S);
  const E = useSelector((state) => state.calc.E);
  const F = useSelector((state) => state.calc.F);
  const n = useSelector((state) => state.calc.n);
  const totalPrice = useSelector((state) => state.calc.totalPrice);

  const length = useSelector((state) => state.options.length);
  const width = useSelector((state) => state.options.width);
  const height = useSelector((state) => state.options.height);
  const lamp = useSelector((state) => state.options.lampModel.img);
  const isModal = useSelector((state) => state.options.isModal);

  const [loadImg, setLoadImg] = useState({ img1: false, img2: false });

  const img1 = useRef(null);
  const img2 = useRef(null);

  useEffect(() => {
    const handleLoadImg = (imgKey) => {
      setLoadImg((prevState) => ({ ...prevState, [imgKey]: true }));
    };
    if (img1.current !== null && img2.current !== null) {
      img1.current.onload = () => handleLoadImg("img1");
      img2.current.onload = () => handleLoadImg("img2");
    }
    // Очистка функции
    // return () => {
    //   img1.onLoad = null;
    //   img2.onLoad = null;
    // };
    console.log(img1);
  }, [img1, img2]);

  const imgIsLoaded = loadImg.img1 && loadImg.img2;
  console.log(imgIsLoaded);

  return isModal ? (
    <Modal />
  ) : (
    <>
      <Link className="calc-link" to="/options">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          fill="currentColor"
          className="bi bi-arrow-left-circle"
          viewBox="0 0 16 16"
        >
          <path
            fillRule="evenodd"
            d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8m15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-4.5-.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5z"
          />
        </svg>
        Назад
      </Link>
      <img className="logoImg" src={linkImg} alt="logo" />
      <h1 className="calc-title">Отчет расчета освещенности</h1>
      <div className="calc-result">
        <div className="result-desc">
          <div
            className="text"
            style={{ display: imgIsLoaded ? "block" : "none" }}
          >
            <p>
              Освещенность помещения: <span>{E} Лк</span>
            </p>
            <p>
              Общий световой поток составит: <span>{F} Лм</span>
            </p>
            <p>
              Общее количество светильников: <span>{n} шт</span>
            </p>
            <p>
              Общая стоимость светильников: <span>{totalPrice} ₽</span>
            </p>
          </div>
          <img
            style={{ display: imgIsLoaded ? "block" : "none" }}
            title="Подробнее о светильнике"
            onClick={() => dispatch(openModal())}
            className="room-lamp"
            src={lamp}
            alt="lamp"
            ref={img1}
          />
        </div>
        <div className="result-img">
          <span
            style={{ display: imgIsLoaded ? "flex" : "none" }}
            className="room-illuminance"
          >
            Общая освещенность:
            <span>{E} Лк</span>
          </span>
          <img
            style={{ display: imgIsLoaded ? "block" : "none" }}
            className="room"
            src={room}
            alt="room"
            ref={img2}
          />
          <span
            style={{ display: imgIsLoaded ? "block" : "none" }}
            className="room-length"
          >
            {length}м
          </span>
          <span
            style={{ display: imgIsLoaded ? "block" : "none" }}
            className="room-width"
          >
            {width}м
          </span>
          <span
            style={{ display: imgIsLoaded ? "block" : "none" }}
            className="room-height"
          >
            {height}м
          </span>
          <span
            style={{ display: imgIsLoaded ? "block" : "none" }}
            className="room-square"
          >
            Общая площадь:
            <span style={{ display: imgIsLoaded ? "block" : "none" }}>
              {S} м<sup>2</sup>
            </span>
          </span>
        </div>
      </div>
    </>
  );
};

export default CalcElem;

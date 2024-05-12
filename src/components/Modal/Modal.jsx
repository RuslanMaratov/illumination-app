import React from "react";
import "./Modal.scss";
import { closeModal } from "../../features/options/optionsSlice";
import { useDispatch, useSelector } from "react-redux";
import linkImg from "../../assets/link.png";

const Modal = () => {
  const dispatch = useDispatch();
  const lampModel = useSelector((state) => state.options.lampModel );

  return (
    <div className="options-container">
      <div className="modal">
        <button onClick={() => dispatch(closeModal())} className="back-btn">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            fill="currentColor"
            class="bi bi-arrow-left-circle"
            viewBox="0 0 16 16"
          >
            <path
              fill-rule="evenodd"
              d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8m15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-4.5-.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5z"
            />
          </svg>
          Назад
        </button>
        <h1 className="modal-title">{lampModel.name}</h1>
        <img className="logoImg" src={linkImg} alt="logo" />
        <div className="desc-wrapper">
          <img className="modal-img" src={lampModel.img} alt="lamp" />
          <div className="modal-desc">
            <p>
              Мощность светильника: <span>{lampModel.capacity} Вт</span>
            </p>
            <p>
              Световой поток светильника: <span>{lampModel.lumen} Лм</span>
            </p>
            <p>
              Напряжение: <span>{lampModel.voltage} В</span>
            </p>
            <p>
              Защита светильника: <span>IP{lampModel.ip}</span>
            </p>
            <p>
              Цветовая температура: <span>{lampModel.temp}</span>
            </p>
            <p>
              Длина: <span>{lampModel.length} мм</span>
            </p>
            <p>
              Ширина: <span>{lampModel.width} мм</span>
            </p>
            <p>
              Высота: <span>{lampModel.height} мм</span>
            </p>
            <p>
              Страна производства: <span>{lampModel.madeIn}</span>
            </p>
            <p>
              Цена светильника: <span>{lampModel.price} ₽</span>
            </p>
          </div>
        </div>
        <h2 className="modal-subtitle">ОПИСАНИЕ</h2>
        <p className="lamp-desc">{lampModel.desc}</p>
      </div>
    </div>
  );
};

export default Modal;

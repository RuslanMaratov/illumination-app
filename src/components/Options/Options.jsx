import React from "react";
import "./Options.scss";
import Modal from "../Modal/Modal";
import {
  changeHeight,
  changeIlluminance,
  changeLampModel,
  changeLampName,
  changeLength,
  changeSelect,
  changeWidth,
  openModal,
} from "../../features/options/optionsSlice";
import { useDispatch, useSelector } from "react-redux";
import lamps from "../../data/lamps.json";
import { useNavigate, Link } from "react-router-dom";
import { calculate, completed } from "../../features/calc/calcSlice";
import linkImg from "../../assets/link.png";

let data = Object.keys(lamps);

const Options = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const optionsState = useSelector((state) => state.options);

  const isRequiredParams = () => {
    if (
      optionsState.length >= 0 &&
      optionsState.length &&
      optionsState.width >= 0 &&
      optionsState.width &&
      optionsState.height >= 0 &&
      optionsState.height &&
      optionsState.illuminance >= 0 &&
      optionsState.illuminance &&
      optionsState.select &&
      optionsState.lampName &&
      optionsState.lampModel.id
    ) {
      return true;
    } else return false;
  };

  const onClickCalc = () => {
    if (isRequiredParams()) {
      dispatch(calculate(optionsState)).then((response) => {
        if (response.type === "calc/calculate/fulfilled") {
          // Обработка успешного завершения
          dispatch(completed(response.payload));
          navigate("/calc");
        } else if (response.type === "calc/calculate/rejected") {
          // Обработка ошибки
          alert("Ошибка! " + response.error.message);
        }
      });
    } else {
      alert(
        "Вы ввели некорректные данные! Необходимо заполнить все поля. Допустимо вводить только положительные числа."
      );
    }
  };

  return optionsState.isModal ? (
    <Modal />
  ) : (
    <div className="options-container">
      <div className="options-header">
        <Link className="calc-link" to="/">
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
          Главная
        </Link>
        <div className="options-title">
          <h1>Расчет освещенности</h1>
          <h2>Для расчета необходимо указать некоторые данные:</h2>
        </div>
        <img className="logoImg" src={linkImg} alt="logo" />
      </div>
      <div className="options-questions">
        <div className="options-question">
          <p>Укажите данные помещения (длину, ширину и высоту) в метрах.</p>
          <input
            onChange={(e) => dispatch(changeLength(+e.target.value))}
            type="number"
            placeholder="ДЛИНА"
            value={optionsState.length || ""}
          />
          <input
            onChange={(e) => dispatch(changeWidth(+e.target.value))}
            type="number"
            placeholder="ШИРИНА"
            value={optionsState.width || ""}
          />
          <input
            onChange={(e) => dispatch(changeHeight(+e.target.value))}
            type="number"
            placeholder="ВЫСОТА"
            value={optionsState.height || ""}
          />
        </div>
        <div className="options-question">
          <p>Укажите требуемую освещенность в люксах.</p>
          <input
            onChange={(e) => dispatch(changeIlluminance(+e.target.value))}
            type="number"
            placeholder="ОСВЕЩЕННОСТЬ"
            value={optionsState.illuminance || ""}
          />
          <p>Укажите коэффициенты отражения потолка/стен/пола в процентах.</p>
          <p>белая поверхность - 70%, светлая - 50%, серая - 30%, темная 10%</p>
          <select
            onChange={(e) => dispatch(changeSelect(e.target.value))}
            className="options-select"
            value={optionsState.select || "select1"}
          >
            <option value="select1" disabled>
              Коэф.отражения потолка, стен, рабочей поверхности.
            </option>
            <option className="option">70% 50% 30%</option>
            <option className="option">70% 50% 10%</option>
            <option className="option">70% 30% 30%</option>
            <option className="option">70% 30% 10%</option>
            <option className="option">50% 50% 10%</option>
            <option className="option">50% 30% 10%</option>
            <option className="option">30% 10% 10%</option>
          </select>
        </div>
        <div className="lamp">
          <div className="lamp-select">
            <p>Выберите светильник, который хотите использовать.</p>
            <select
              onChange={(e) => dispatch(changeLampName(e.target.value))}
              className="options-select"
              value={optionsState.lampName || "select4"}
            >
              <option disabled value="select4">
                Производитель
              </option>
              {data.map((elem) => {
                return (
                  <option key={elem} value={elem} className="option">
                    {elem}
                  </option>
                );
              })}
            </select>

            {optionsState.lampData !== null ? (
              <select
                onChange={(e) => dispatch(changeLampModel(+e.target.value))}
                className="options-select"
                value={optionsState.lampModel.id || "select5"}
              >
                <option disabled value="select5">
                  Модель
                </option>
                {optionsState.lampData.map((elem) => {
                  return (
                    <option key={elem.id} value={elem.id} className="option">
                      {`${elem.name}, ${elem.lumen}лм`}
                    </option>
                  );
                })}
              </select>
            ) : (
              <></>
            )}
          </div>
          {optionsState.lampModel.id !== null ? (
            <>
              <div className="lampData">
                <div className="lampDesc">
                  <p>
                    Мощность светильника: {optionsState.lampModel.capacity} Вт
                  </p>
                  <p>
                    Световой поток светильника: {optionsState.lampModel.lumen}{" "}
                    Лм
                  </p>
                  <p>
                    Степень защиты светильника: IP{optionsState.lampModel.ip}
                  </p>
                  <p>Цена за 1 шт.: {optionsState.lampModel.price} руб.</p>
                </div>
                <button
                  onClick={() => dispatch(openModal())}
                  className="optionsBtn"
                >
                  Описание светильника
                </button>
              </div>
              <button onClick={() => onClickCalc()} className="optionsBtn calc">
                Рассчитать
              </button>
            </>
          ) : (
            <></>
          )}
        </div>
      </div>
    </div>
  );
};

export default Options;

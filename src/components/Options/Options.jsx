import React from "react";
import "./Options.scss";
import {
  changeHeight,
  changeIlluminance,
  changeLength,
  changeSelect1,
  changeSelect2,
  changeSelect3,
  changeWidth,
} from "../../features/options/optionsSlice";
import { useDispatch } from "react-redux";

const Options = () => {
  const dispatch = useDispatch();

  return (
    <div className="options-container">
      <h1 className="options-title">Расчет освещенности</h1>
      <h2 className="options-subtitle">
        Для расчета необходимо указать некоторые данные:
      </h2>
      <div className="options-questions">
        <div className="options-question">
          <p>Укажите данные помещения (длину, ширину и высоту) в метрах.</p>
          <input
            onChange={(e) => dispatch(changeLength(+e.target.value))}
            type="number"
            placeholder="ДЛИНА"
          />
          <input
            onChange={(e) => dispatch(changeWidth(+e.target.value))}
            type="number"
            placeholder="ШИРИНА"
          />
          <input
            onChange={(e) => dispatch(changeHeight(+e.target.value))}
            type="number"
            placeholder="ВЫСОТА"
          />
        </div>
        <div className="options-question">
          <p>Укажите требуемую освещенность в люксах.</p>
          <input
            onChange={(e) => dispatch(changeIlluminance(+e.target.value))}
            type="number"
            placeholder="ОСВЕЩЕННОСТЬ"
          />
          <p>Укажите коэффициенты отражения потолка/стен/пола в процентах.</p>
          <select
            onChange={(e) =>
              dispatch(changeSelect1(+e.target.value.slice(0, -1)))
            }
            className="options-select"
            defaultValue="select1"
          >
            <option value="select1" disabled>
              Коэф.отражения потолка
            </option>
            <option className="option">30%</option>
            <option className="option">50%</option>
            <option className="option">70%</option>
          </select>
          <select
            onChange={(e) =>
              dispatch(changeSelect2(+e.target.value.slice(0, -1)))
            }
            className="options-select"
            defaultValue="select2"
          >
            <option value="select2" disabled>
              Коэф.отражения стен
            </option>
            <option className="option">30%</option>
            <option className="option">50%</option>
            <option className="option">70%</option>
          </select>
          <select
            onChange={(e) =>
              dispatch(changeSelect3(+e.target.value.slice(0, -1)))
            }
            className="options-select"
            defaultValue="select3"
          >
            <option value="select3" disabled>
              Коэф.отражения пола
            </option>
            <option className="option">30%</option>
            <option className="option">50%</option>
            <option className="option">70%</option>
          </select>
        </div>
        <div className="options-question lamp">
          <p>Выберите светильник, который хотите использовать.</p>
        </div>
      </div>
    </div>
  );
};

export default Options;

import React, { useState } from "react";
import "./Calc.scss";
import CalcElem from "./CalcElem";

const Calc = () => {
  const [isLoading, setIsLoading] = useState(false);

//   setTimeout(() => {
//     setIsLoading(true);
//   }, 5000);

  return (
    <div className="calc-container">
      <CalcElem />
    </div>
  );
};

export default Calc;

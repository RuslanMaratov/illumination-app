import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import StartPage from "./components/StartPage/StartPage";
import Options from "./components/Options/Options";
import Calc from "./components/Calc/Calc";

function App() {
  return (
    <div className="App">
      <header className="App-container">
        <BrowserRouter basename="/illumination-app/">
          <Routes>
            <Route path="/" element={<StartPage />} />
            <Route path="/options" element={<Options />} />
            <Route path="/calc" element={<Calc />} />
          </Routes>
        </BrowserRouter>
      </header>
    </div>
  );
}

export default App;

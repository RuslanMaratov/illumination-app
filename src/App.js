import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import StartPage from "./components/StartPage/StartPage";
import Options from "./components/Options/Options";

function App() {
  return (
    <div className="App">
      <header className="App-container">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<StartPage />} />
            <Route path="/options" element={<Options />} />
          </Routes>
        </BrowserRouter>
      </header>
    </div>
  );
}

export default App;

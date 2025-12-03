import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./home";
import Countries from "../src/restcountries/countries.component";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/countries" element={<Countries />} />
    </Routes>
  );
}

export default App;

import "./App.css";
import Palette from "./components/Palette/Palette";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import Form from "./components/Form/Form";

function App() {
  return (
    <div className="wrapper">
      <Header />
      <Routes>
        <Route path="/" element={<Form />} />
        <Route path="/color" element={<Palette />} />
      </Routes>
    </div>
  );
}

export default App;

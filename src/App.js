import { BrowserRouter, Route, Routes } from "react-router-dom"
import About from "./page/About";
import Contacto from "./page/Contacto";
import Home from "./page/Home";
import Portafolio from "./page/Portafolio";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Portafolio" element={<Portafolio />} />
        <Route path="/About" element={<About />} />
        <Route path="/Contact" element={<Contacto />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

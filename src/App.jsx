/* Importamos bibliotecas */
import { BrowserRouter, Routes, Route } from "react-router-dom";

/* Importamos las paginas */
import Main from "./Pages/Main.jsx";
import Navbar from "./Components/Navbar.jsx";
import NotFound from "./Pages/NotFound.jsx";
import Mayor from "./Pages/Mayor.jsx";
import Paises from "./Pages/Paises.jsx";

function App() {
  return (
    <div className="relative text-black dark:text-white">
      <div
        className="absolute top-0 bottom-0 z-[-2] min-h-screen w-full bg-gray-50 dark:bg-gray-950
      bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(217,216,255,0.5),rgba(255,255,255,0.9))]
      dark:bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"
      ></div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/mayor" element={<Mayor />} />
          <Route path="/paises" element={<Paises />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

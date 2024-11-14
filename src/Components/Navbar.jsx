import { Link } from "react-router-dom";

function Navbar() {
  return (
    <header className="fixed top-0 z-10 flex shadow-lg backdrop-blur items-center justify-center w-full mx-auto mt-2">
      <div className="flex px-3 text-sm font-medium rounded-full text-gray-600 dark:text-gray-200 justify-center items-center">
        <Link
          to="/"
          className="relative block px-2 py-2 transition hover:text-slate-500 text-2xl"
        >
          Inicio
        </Link>
        <Link
          to="/mayor"
          className="relative block px-2 py-2 transition hover:text-slate-500 text-2xl"
        >
          Mayor
        </Link>
        <Link
          to="/paises"
          className="relative block px-2 py-2 transition hover:text-slate-500 text-2xl"
        >
          Paises
        </Link>
      </div>
    </header>
  );
}

export default Navbar;

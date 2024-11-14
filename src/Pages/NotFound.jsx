import React from "react";
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="flex flex-col justify-center items-center h-[100%]">
      <h1 className="text-3xl">Pagina No Encontrada</h1>
      <Link
        to="/"
        className="relative block px-2 py-2 transition hover:text-slate-500 text-xl"
      >
        Volver
      </Link>
    </div>
  );
}

export default NotFound;

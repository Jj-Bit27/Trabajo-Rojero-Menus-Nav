import { useState } from "react";
import paises from "../paises";
import { CardPais } from "../Components/CardPais";

function Paises() {
  const [subregionSeleccionada, setSubregionSeleccionada] = useState("");

  return (
    <div className="max-w-screen-lg mx-auto p-5 scroll-m-20 w-full container lg:max-w-4xl md:max-w-2xl">
      <h1 className="text-3xl font-bold mb-4 pt-12 text-center">Paises</h1>
      <div className="flex px-3 text-sm font-medium rounded-full text-gray-200 justify-center items-center">
        <button
          className="relative block px-2 py-2 transition hover:text-slate-500 text-xl"
          onClick={() => setSubregionSeleccionada("South America")}
        >
          South America
        </button>
        <button
          className="relative block px-2 py-2 transition hover:text-slate-500 text-xl"
          onClick={() => setSubregionSeleccionada("Central America")}
        >
          Central America
        </button>
        <button
          className="relative block px-2 py-2 transition hover:text-slate-500 text-xl"
          onClick={() => setSubregionSeleccionada("Caribbean")}
        >
          Caribbean
        </button>
        <button
          className="relative block px-2 py-2 transition hover:text-slate-500 text-xl"
          onClick={() => setSubregionSeleccionada("North America")}
        >
          North America
        </button>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {paises
          .filter((pais) =>
            subregionSeleccionada
              ? pais.subregion === subregionSeleccionada
              : true
          )
          .map((pais) => (
            <CardPais
              key={pais.id}
              bandera={pais.bandera}
              pais={pais.pais}
              capital={pais.capital}
              subregion={pais.subregion}
            />
          ))}
      </div>
    </div>
  );
}

export default Paises;

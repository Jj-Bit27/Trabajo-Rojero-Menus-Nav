import React from "react";

export function CardPais({ bandera, pais, capital, subregion }) {
  return (
    <div className="max-w-sm rounded-lg shadow bg-slate-800 border-slate-700">
      <img className="rounded-t-lg" src={bandera} alt="" />
      <div className="p-5">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          {pais}
        </h5>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          {capital} <br /> {subregion}
        </p>
      </div>
    </div>
  );
}

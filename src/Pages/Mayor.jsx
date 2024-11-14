import { useState } from "react";

function Mayor() {
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [num3, setNum3] = useState("");
  const [resultado, setResultado] = useState(null);

  const calcularMayor = (e) => {
    e.preventDefault();

    const numero1 = parseFloat(num1);
    const numero2 = parseFloat(num2);
    const numero3 = parseFloat(num3);

    if (isNaN(numero1) || isNaN(numero2) || isNaN(numero3)) {
      setResultado("Por favor, ingrese números válidos.");
    } else {
      const mayor = Math.max(numero1, numero2, numero3);
      setResultado(`El número mayor es: ${mayor}`);
    }
  };

  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <h1 className="text-3xl mb-5">
        El Numero Mayor de <strong>3</strong> Numeros
      </h1>

      <form onSubmit={calcularMayor} className="flex flex-col">
        <input
          type="number"
          value={num1}
          onChange={(e) => setNum1(e.target.value)}
          placeholder="Ingresa el primer número"
          className="mt-2 mb-5 p-3 bg-transparent border border-slate-500 rounded-full w-64"
        />
        <input
          type="number"
          value={num2}
          onChange={(e) => setNum2(e.target.value)}
          placeholder="Ingresa el segundo número"
          className="mt-2 mb-5 p-3 bg-transparent border border-slate-500 rounded-full w-64"
        />
        <input
          type="number"
          value={num3}
          onChange={(e) => setNum3(e.target.value)}
          placeholder="Ingresa el tercer número"
          className="mt-2 mb-5 p-3 bg-transparent border border-slate-500 rounded-full w-64"
        />

        <button
          type="submit"
          className="bg-slate-500 rounded-full text-white py-2 px-4 hover:bg-slate-600"
        >
          Calcular Mayor
        </button>
      </form>

      {resultado && (
        <p className="mt-4 font-semibold text-center text-2xl">{resultado}</p>
      )}
    </div>
  );
}

export default Mayor;

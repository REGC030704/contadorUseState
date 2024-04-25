import React, { useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const reset = () => {
    setCount(0);
  };

  return (
    <div className="flex flex-col items-center justify-center bg-white h-screen">
      <h2 className="text-3xl font-bold mb-4 text-black">Contador</h2>
      <p className="text-xl mb-4 text-black">El valor actual es: {count}</p>
      <div className="flex">
        <button className="bg-blue-200 text-white p-2 rounded-lg mr-4 text-lg" onClick={increment}>Incrementar</button>
        <button className="bg-red-200 text-white p-2 rounded-lg text-lg" onClick={reset}>Reiniciar</button>
      </div>
    </div>
  );
};

export default Counter;

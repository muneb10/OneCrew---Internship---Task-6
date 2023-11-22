import { useState } from "react";
import '../App.css';
const CounterApp = () => {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount(count + 1);
  };

  const handleDecrement = () => {
    setCount(count - 1);
  };

  const cssClasses =
    "w-[80px] text-xl rounded-md bg-yellow-400 font-bold p-2 hover:bg-yellow-300 hover:text-red-600";

  return (
    <>
      <div className="h-screen bg-red-700 flex items-center justify-center flex-col">
        <h2 className="mb-6 text-4xl font-bold text-red-300">Counter</h2>
        <div className="container h-1/3 w-full md:w-1/3 lg:w-[50%] bg-white rounded-xl flex flex-col justify-center items-center outline-dashed min-sm:w-[10rem] p-4">
          <h2 className="mb-6 font-bold text-4xl text-red-400">{count}</h2>
          <div className="flex flex-col md:flex-row gap-4">
            <button
              className={`${cssClasses} mb-2 md:mb-0`}
              onClick={handleIncrement}
            >
              +1
            </button>
            <button
              className={cssClasses}
              onClick={handleDecrement}
            >
              -1
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default CounterApp;

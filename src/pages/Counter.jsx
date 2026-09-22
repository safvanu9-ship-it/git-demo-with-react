import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
// Fixed relative path to match your folder structure
import { increment, decrement } from '../features/counter/CounterSlice';


const Counter = () => {
  // 1. Fixed state key casing from state.Counter to state.counter
  const count = useSelector((state) => state.counter.count);

  const dispatch = useDispatch();

  const handleDecriment = () => {
    // 2. Added parentheses to execute action creator: decrement()
    dispatch(decrement());
  };

  const handleIncrment = () => {
    dispatch(increment());
  };

  const incrementByFive = () => {
    dispatch(incrementByFive5(5))
  }

  return (

    <div className=' min-h-screen bg-amber-100 flex flex-col justify-center items-center '>
      <div className="flex justify-center items-center gap-6 h-screen">
        <button
          onClick={handleDecriment}
          className="flex justify-center items-center bg-blue-500 text-black rounded-full font-bold px-10 py-3.5"
        >
          Decrement
        </button>
        <h1 className="font-bold text-black">{count}</h1>
        <button
          onClick={handleIncrment}
          className="flex justify-center items-center bg-violet-600 text-black rounded-full font-bold py-3.5 px-10"
        >
          Increment
        </button>
      </div>

      <button onClick={increment} className=' bg-blue-600 text-white font-bold text-xl px-20 py-5 rounded-full '>
        Increment By Five
      </button>
    </div>
  );
};

export default Counter;
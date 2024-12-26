import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { increment, decrement, incrementByAmount } from "./store/reducers/counterSlice";

function App() {
  const { value } = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  return (
    <>
      <div className="m-auto container mt-5 bg-red-100 p-10">
        <h1 className="mb-5 text-center font-bold text-3xl text-red-900">
          Counter : {value}
        </h1>

        <div className="text-center">
          {/* Correctly dispatch the increment action */}
          <button
            onClick={() => dispatch(increment())}
            className="text-red-900 border-2 rounded bg-transparent px-5 py-2"
          >
            Increment
          </button>

          {/* Correctly dispatch the decrement action */}
          <button
            onClick={() => dispatch(decrement())}
            className="mx-5 text-red-900 border-2 rounded bg-transparent px-5 py-2"
          >
            Decrement
          </button>

          {/* Correctly dispatch the incrementByAmount action with a payload */}
          <button
            onClick={() => dispatch(incrementByAmount(5))}
            className="mx-5 text-red-900 border-2 rounded bg-transparent px-5 py-2"
          >
            Increment by 5
          </button>
        </div>
      </div>
    </>
  );
}

export default App;

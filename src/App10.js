import React from "react";
import ExpComp from "./ExpComp";
import { useState } from "react";

export default function App10() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <ExpComp count={count} setCount={setCount} />
      <button onClick={() => setCount((prevState) => prevState + 1)}>
        Count{count}
      </button>
    </div>
  );
}
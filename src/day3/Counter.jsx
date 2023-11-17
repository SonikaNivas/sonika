import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  return (
    <div>
      <p>Count: {count}</p>
      <button className="red-button" onClick={() => setCount(count + 1)}>
        Increment
      </button>
      &nbsp; &nbsp; &nbsp;
      <button className="red-button" onClick={() => setCount(0)}>
        Reset
      </button>
    </div>
  );
};
export default Counter;
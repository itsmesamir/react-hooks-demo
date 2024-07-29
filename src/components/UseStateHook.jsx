import { useState } from "react";

const UseStateHook = () => {
  const [count, setCount] = useState(0);

  // const countHandler = () => {
  //   setCount(count + 1);
  // };

  // const abc = () => setCount(count + 1)

  return (
    <div>
      <h1>useState Hook</h1>
      <p>Count: {count}</p>
      {/* <button onClick={() => setCount(count + 1)}>Increment</button> */}
      <button onClick={() => setCount(count + 1)}>Increment</button>
      {/* <button onClick={abc}>Increment</button> */}
      {/* <button onClick={countHandler}>Increment</button> */}
    </div>
  );
};

export default UseStateHook;

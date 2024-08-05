import { useState } from "react";

const UseStateHook = () => {
  const [count, setCount] = useState(0);
  const [isTrue, setIsTrue] = useState(true);
  // if (true) {
  // }

  const countHandler = () => {
<<<<<<< Updated upstream
    count + 1;
    // setCount(count + 1);
    setIsTrue(!isTrue);
  };

  console.log(count);
=======
    setCount(count + 1);
  };

  // const abc = () => setCount(count + 1)0
>>>>>>> Stashed changes

  return (
    <div>
      <h1>useState Hook</h1>
      <p>Count: {count}</p>
      {/* <button onClick={() => setCount(count + 1)}>Increment</button> */}
      {/* <button onClick={() => setCount(count + 1)}>Increment</button> */}
<<<<<<< Updated upstream
=======
      {/* <button onClick={abc}>Increment</button> */}
>>>>>>> Stashed changes
      <button onClick={countHandler}>Increment</button>
    </div>
  );
};

export default UseStateHook;

// demonstration of useEffect hook

import React, { useState, useEffect } from "react";

const Timer = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prevCount) => prevCount + 1);
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div>
      <h2>Timer</h2>
      <p>Seconds: {count}</p>
    </div>
  );
};

const UseEffectHook = () => {
  // const Timer = () => {

  // }
  return (
    <div>
      <h1>useEffect Hook</h1>
      <Timer />
    </div>
  );
};

export default UseEffectHook;

// import React, { useState, useEffect } from "react";

// const UseEffectHook = () => {
//   const [count, setCount] = useState(0);

//   const clickHandler = () => setCount(count + 1);

//   // useEffect(() => {
//   //   console.log("useEffect called");
//   //   document.title = `Count: ${count}`;
//   // }, [5]);

//   // useEffect(() => {
//   //   console.log("useEffect called");
//   //   document.title = `Count: ${count}`;
//   // }, [count]);

//   // useEffect(() => {
//   //   console.log("useEffect called");
//   //   document.title = `Count: ${count}`;
//   // }, []);

//   // useEffect(() => {
//   //   console.log("useEffect called");
//   //   document.title = `Count: ${count}`;
//   // }, [1]);

//   return (
//     <div>
//       <div>Use Effect demo</div>
//       <div>Count: {count}</div>

//       <button onClick={clickHandler}>Increment</button>
//     </div>
//   );
// };

// export default UseEffectHook;

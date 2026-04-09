//* working of useRef hook //*


// import { useRef } from "react"
// function App() {
//   const inputRef = useRef();
//   const handlefocus = () => {
//     inputRef.current.focus();
//   }
//   return <div>
//     <input ref={inputRef} type="text" />
//     <button onClick={handlefocus}>Focus</button>
//   </div>
// }

// export default App


// stop watch

import React, { useRef } from "react";

function App() {
  const timeRef = useRef(null);
  const intervalRef = useRef(null);

  let count = 0;

  const start = () => {
    if (intervalRef.current) return;

    intervalRef.current = setInterval(() => {
      count++;
      timeRef.current.innerText = count;
    }, 1000);
  };

  const stop = () => {
    clearInterval(intervalRef.current);
    intervalRef.current = null;
  };

  const reset = () => {
    stop();
    count = 0;
    timeRef.current.innerText = 0;
  };

  return (
    <div style={{ textAlign: "center", marginTop: "100px" }}>
      <h2 ref={timeRef}>0</h2>

      <button onClick={start}>Start</button>
      <button onClick={stop}>Stop</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
}

export default App;



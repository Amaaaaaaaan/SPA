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






//* light bulb functionality {rollup of useState and useEffect hooks}//*

// import { useState,useEffect } from "react";

// function App() {

// return <div>
//   <LightBulb />
// </div>
// }

// function LightBulb() {
//   const [bulbOn, setBulbOn] = useState(true);  
//   return <div>
//     <BulbState bulbOn={bulbOn} />
//     <ToggleBulbState setBulbOn={setBulbOn} />
//   </div>
// }

// function BulbState({ bulbOn }) {
//   return <div>
//     {bulbOn ? <h1>Bulb is ON</h1> : <h1>Bulb is OFF</h1>}
//   </div>

// }

// function ToggleBulbState({ setBulbOn }) {
  
//   function toggle(){
//     setBulbOn(currentState => !currentState);
//   }

//   return <div>
//     <button onClick={toggle}>Toggle the Bulb</button>
//   </div>
// }

// export default App


// * working of useContext hook *//

// import { createContext, useContext } from "react";

// const UserContext = createContext();

// function App() {
//   return (
//     <UserContext.Provider value="Aman">
//       <Child />
//     </UserContext.Provider>
//   );
// }

// function Child() {
//   const user = useContext(UserContext);
//   return (
//   <div>
   
//     <h1>Hello {user}</h1>
//      <Childish/>
//   </div>
//   )
// }

// function Childish() {
//   const user = useContext(UserContext);
//   return <h1>Childish component says Hello : {user}</h1>;
// }

// export default App;

//* working of custom hook *//

// import { useState } from "react";

// function useCounter() {
//   const [count, setCount] = useState(0);
//   function increment() {
//     setCount(count + 1);
//   }
//   function decrement() {
//     setCount(count - 1);
//   }
//   function reset(){
//     setCount(0);
//   }
//   function increaseByValue(){
//     setCount(count + 10);
//   }
//   return { count, increment, decrement, reset, increaseByValue };
// }

// function App() {
//   const { count, increment, decrement, reset, increaseByValue } = useCounter();
//   return <div>
//     <h1>Count: {count}</h1>
//     <button onClick={increment}>Increment</button>
//     <button onClick={decrement}>Decrement</button>
//     <button onClick={reset}>Reset</button>
//     <button onClick={increaseByValue}>Increase by 10</button>
//   </div>
// }

// export default App;


import { useState } from "react";
import { useFetch } from "./hooks/useFetch";
import js from "@eslint/js";

function App() {

  const [currentdata, setCurrentData] = useState(1);
  const { data, loading } = useFetch("https://jsonplaceholder.typicode.com/todos/" + currentdata);

  if(loading) {
    return <h1>Loading...</h1>
  }

  return (
    <div>
      <button onClick={()=> setCurrentData(1)}>1</button>
      <button onClick={()=> setCurrentData(2)}>2</button>
      <button onClick={()=> setCurrentData(3)}>3</button>
      {JSON.stringify(data)}
    </div>
  );
}

export default App;
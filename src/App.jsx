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

// light bulb functionality

import { useState,useEffect } from "react";

function App() {

return <div>
  <LightBulb />
</div>
}

function LightBulb() {
  const [bulbOn, setBulbOn] = useState(true);  
  return <div>
    <BulbState bulbOn={bulbOn} />
    <ToggleBulbState setBulbOn={setBulbOn} />
  </div>
}

function BulbState({ bulbOn }) {
  return <div>
    {bulbOn ? <h1>Bulb is ON</h1> : <h1>Bulb is OFF</h1>}
  </div>

}

function ToggleBulbState({ setBulbOn }) {
  
  function toggle(){
    setBulbOn(currentState => !currentState);
  }

  return <div>
    <button onClick={toggle}>Toggle the Bulb</button>
  </div>
}



export default App




import { useRef } from "react"

function App() {

  const inputRef = useRef();

  const handlefocus = () => {
    inputRef.current.focus();
  }

  return <div>
    <input ref={inputRef} type="text" />
    <button onClick={handlefocus}>Focus</button>
  </div>

}


export default App

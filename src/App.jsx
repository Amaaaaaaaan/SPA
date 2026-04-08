import { BrowserRouter,Routes,Route,Link } from "react-router-dom"

function App() {

  return <div>

    

    <BrowserRouter>
    <Link to="/">Home</Link>
    <Link to="/about">About</Link>
      <Routes>
          <Route path="/" element={<h1>Home</h1>} />
          <Route path="/about" element={<h1>About</h1>} />

      </Routes>
    </BrowserRouter>
  </div>

}

export default App

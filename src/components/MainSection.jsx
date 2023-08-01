import { Routes, Route } from "react-router-dom"
import Home from "./Home"
import Red from "./Red"
import Blue from "./Blue"
import List from "./List"

const MainSection = () => {
    return (
      <div id="main-section">
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/blue" element={<Blue />}/>
          <Route path="/red" element={<Red />}/>
          <Route path="/list" element={<List />}/>
        </Routes>
      </div>
    )
}

export default MainSection
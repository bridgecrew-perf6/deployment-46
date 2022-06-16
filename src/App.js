import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom"

import Navbar from "./components/Navbar"
import Home from "./pages/Home";
import Chakula from "./pages/Chakula"
import Form from "./pages/Form"


// import Info from "./pages/Info"



function App() {
  return (
    <Router>
      <Navbar />
    
      <div className="container main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Chakula" element={<Chakula/>} />
          <Route path="/form" element={<Form />} />
          {/* <Route path="/Info" element={<Info />} /> */}
        </Routes>
      
      </div>
     
    </Router>
  )
}

export default App;

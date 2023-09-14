import Navbar from "./components/Navbar.js";
import TextForm from "./components/TextForm.js";
import About from "./components/About.js"
import { useState } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";

const originalBodyClasses = document.body.className;
document.body.classList.add("bg-light");

function App() {

  const [mode, setMode] = useState("light");

  const toggleMode = (cls) => {
    setMode(cls);
    document.body.className = `bg-${cls + " " + originalBodyClasses + (cls === 'dark' ? " text-light" : "")}`;
  }

  return (
    <Router>
      <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
      <div className="container my-5">
        <Routes>
          <Route path="/" element={<TextForm heading="Enter your text" mode={mode} />} />
          <Route path="/about" element={<About mode={mode}/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
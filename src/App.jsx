import "./App.css";
import Navbar from "./components/navbar/Navbar";

import { Routes, Route } from "react-router";
import Home from "./components/pages/Home";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;

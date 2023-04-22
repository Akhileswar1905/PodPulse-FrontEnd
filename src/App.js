import "./App.css";
import { Route, Routes } from "react-router-dom";

import Home from "./components/Home";
import About from "./components/About";
import NavBar from "./components/NavBar";
import NewPodcast from "./components/NewPodcast";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/new-podcast" element={<NewPodcast />} />
      </Routes>
    </>
  );
}

export default App;

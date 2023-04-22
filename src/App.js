import "./App.css";
import { NavLink, Route, Routes } from "react-router-dom";

import Home from "./components/Home";
import About from "./components/Fav";
import NavBar from "./components/NavBar";
import NewPodcast from "./components/NewPodcast";
import Navbar from "react-bootstrap/Navbar";

function App() {
  return (
    <div className="box">
      <NavLink
        style={{
          textDecoration: "none",
          padding: "0",
          margin: "0",
        }}
        to="/"
      >
        <Navbar.Brand className="navlink-header navlink">PodPulse</Navbar.Brand>
      </NavLink>
      <div className="body">
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/fav" element={<About />} />
          <Route path="/new-podcast" element={<NewPodcast />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;

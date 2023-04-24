import "./App.css";
import { NavLink, Route, Routes } from "react-router-dom";

import Home from "./components/Home";
import About from "./components/Fav";
import NavBar from "./components/NavBar";
import NewPodcast from "./components/NewPodcast";
import Navbar from "react-bootstrap/Navbar";
import Auth from "./Auth/Auth";
import Login from "./Auth/Login";
import SignUp from "./Auth/SignUp";

function App() {
  return (
    <div className="box">
      <div className="top">
        <NavLink
          style={{
            textDecoration: "none",
            padding: "0",
            margin: "0",
          }}
          to="/"
        >
          <Navbar.Brand className="navlink-header navlink">
            PodPulse
          </Navbar.Brand>
        </NavLink>
        {/* Search Bar */}
        <div className="search-bar">
          <input type="search" placeholder="search..." />
        </div>
      </div>
      <div className="body">
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/fav" element={<About />} />
          <Route path="/new-podcast" element={<NewPodcast />} />
          <Route path="/auth" element={<Auth/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/signup" element={<SignUp/>}/>
        </Routes>
      </div>
    </div>
  );
}

export default App;

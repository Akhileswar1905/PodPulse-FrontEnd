import { useState } from "react";
import { NavLink } from "react-router-dom";

function NavBar() {
  const [isCollapsed, setIsCollapsed] = useState(true);

  let navbarWidth;
  if (window.innerWidth <= 768) {
    navbarWidth = "20vw";
  } else {
    navbarWidth = "15vw";
  }
  const handleCollapse = () => {
    console.log(isCollapsed);
    if (isCollapsed) {
      const links = document.querySelector(".links");
      const miniLinks = document.querySelector(".mini-links");
      const navbar = document.querySelector(".navbar");
      links.style.display = "none";
      miniLinks.style.display = "grid";
      miniLinks.style.placeContent = "center";
      if (window.innerWidth <= 768) {
        navbar.style.width = "10vw";
      } else {
        navbar.style.width = "5vw";
      }
      setIsCollapsed(false);
    } else {
      const links = document.querySelector(".links");
      const miniLinks = document.querySelector(".mini-links");
      const navbar = document.querySelector(".navbar");

      links.style.display = "grid";
      miniLinks.style.display = "none";
      links.style.placeContent = "center";
      if (window.innerWidth <= 768) {
        navbar.style.width = "20vw";
      } else {
        navbar.style.width = "15vw";
      }
      setIsCollapsed(true);
    }
  };

  return (
    <div className="nav">
      <div className="navbar" style={{ width: navbarWidth }}>
        <box-icon onClick={handleCollapse} name="menu"></box-icon>{" "}
        <div
          className="links"
          style={{ display: "grid", placeContent: "center" }}
        >
          <div className="link">
            <box-icon name="home-alt-2"></box-icon>
            <NavLink className="navlink" to="/">
              Home
            </NavLink>
          </div>
          <div className="link">
            <box-icon name="heart"></box-icon>
            <NavLink className="navlink" to="/fav">
              Liked Podcasts
            </NavLink>
          </div>
          <div className="link">
            <box-icon name="plus"></box-icon>
            <NavLink className="navlink" to="/new-podcast">
              New Podcast
            </NavLink>
          </div>
        </div>
        <div className="mini-links" style={{ display: "none" }}>
          <div>
            <NavLink className="navlink icon" to="/">
              <box-icon name="home-alt-2"></box-icon>
            </NavLink>
          </div>
          <div>
            <NavLink className="navlink icon" to="/fav">
              <box-icon name="heart"></box-icon>
            </NavLink>
          </div>
          <div>
            <NavLink className="navlink icon" to="/new-podcast">
              <box-icon name="plus"></box-icon>
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NavBar;

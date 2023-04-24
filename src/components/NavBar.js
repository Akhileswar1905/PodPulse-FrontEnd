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

  let align = isCollapsed ? "left" : "center";
  return (
    <div className="nav">
      <div className="navbar " style={{ width: navbarWidth, textAlign: align }}>
        <box-icon onClick={handleCollapse} name="menu"></box-icon>{" "}
        <div
          className="links"
          style={{ display: "grid", placeContent: "center" }}
        >
          <div className="link">
            <NavLink className="navlink" to="/">
              <i
                className="fa-solid fa-house"
                style={{ margin: "4px", cursor: "pointer" }}
              ></i>
              Home
            </NavLink>
          </div>
          <div className="link">
            <NavLink className="navlink" to="/fav">
              <i
                style={{ margin: "4px", cursor: "pointer" }}
                className="fa-solid fa-heart"
              ></i>
              Liked Podcasts
            </NavLink>
          </div>
          <div className="link">
            <NavLink className="navlink" to="/new-podcast">
              <i
                className="fa-solid fa-plus"
                style={{ margin: "4px", cursor: "pointer" }}
              ></i>
              New Podcast
            </NavLink>
          </div>
          <div className="link">
            <NavLink className="navlink" to={"/signup"}>
              <i
                className="fa-solid fa-user"
                style={{ margin: "4px", cursor: "pointer" }}
              ></i>
              SignUp/Login
            </NavLink>
          </div>
        </div>
        <div className="mini-links" style={{ display: "none" }}>
          <div>
            <NavLink className=" icon" to="/">
              <box-icon name="home-alt-2"></box-icon>
            </NavLink>
          </div>
          <div>
            <NavLink className=" icon" to="/fav">
              <box-icon name="heart"></box-icon>
            </NavLink>
          </div>
          <div>
            <NavLink className=" icon" to="/new-podcast">
              <box-icon name="plus"></box-icon>
            </NavLink>
          </div>
          <div>
            <NavLink to={"/signup"} className=" icon">
              <i
                className="fa-solid fa-user"
                style={{ margin: "4px", cursor: "pointer", color: "black" }}
              ></i>
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NavBar;

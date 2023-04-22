import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavLink } from "react-router-dom";
function NavBar() {
  return (
    <Navbar bg="light" expand="lg" className="navbar">
      <Container>
        <NavLink className={"navlink navlink-header"} to="/">
          <Navbar.Brand>PodPulse</Navbar.Brand>
        </NavLink>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <NavLink className={"navlink"} to="/">
              Home
            </NavLink>
            <NavLink className={"navlink"} to="/about">
              About
            </NavLink>
            <NavLink className={"navlink"} to="/new-podcast">
              New Podcast
            </NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;

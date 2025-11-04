import React, { useContext } from "react";
import { Navbar, Nav, Container, Button } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../auth/AuthContext";
import RES from "../assets/resumifyLogo.png";
import "../App.css";

function NavbarComp() {
  const { user, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout(); // clears token and user
    navigate("/login"); // redirect to login page
  };

  return (
    <Navbar expand="lg" className="custom-navbar py-2" sticky="top">
      <Container>
        <Navbar.Brand as={Link} to="/" className="d-flex align-items-center">
          <img
            src={RES}
            alt="Resumify Logo"
            width="40"
            height="40"
            className="d-inline-block align-top me-2 logo-img"
          />
          Resumify
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto align-items-center">
            <Nav.Link as={Link} to="/">
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/templates">
              Templates
            </Nav.Link>
            <Nav.Link as={Link} to="/review">
              Leave a Review
            </Nav.Link>

            {user ? (
              <>
                <span className="me-2">Hello, {user.name}</span>
                <Button
                  onClick={handleLogout}
                  className="custom-btn-alt button"
                >
                  Logout
                </Button>
              </>
            ) : (
              <>
                <Button
                  as={Link}
                  to="/register"
                  className="me-2 custom-btn button"
                >
                  Register
                </Button>
                <Button as={Link} to="/login" className="custom-btn-alt button">
                  Login
                </Button>
              </>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarComp;

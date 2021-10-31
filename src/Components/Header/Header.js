import React from "react";
import "./Header.css";
import { Button, Container, Nav, Navbar } from "react-bootstrap";

import { Link } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
const Header = () => {
  const { user, logOut } = useAuth();

  return (
    <div className="header-body">
      <Navbar bg="dark" variant="dark" collapseOnSelect expand="lg">
        <Container>
          <Navbar.Brand href="#home">Destination Vacation</Navbar.Brand>
          <Navbar.Toggle />

          <Navbar.Collapse className="justify-content-end">
            <Nav.Link as={Link} to="/home#home">
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/AboutUs">
              About Us
            </Nav.Link>
            {user?.email && (
              <Nav.Link as={Link} to="/addServices">
                Add Services
              </Nav.Link>
            )}
            {user?.email && (
              <Nav.Link as={Link} to="/myOrder">
                My Order
              </Nav.Link>
            )}
            {user?.email && (
              <Nav.Link as={Link} to="/manageAllService">
                Manage Services
              </Nav.Link>
            )}
            <Nav.Link as={Link} to="/contact">
              Contact Us
            </Nav.Link>
            {user?.email ? (
              <Button onClick={logOut} varient="light">
                Logout
              </Button>
            ) : (
              <Nav.Link as={Link} to="/login">
                Login
              </Nav.Link>
            )}

            <Navbar.Text>
              Signed in as: <a href="#login">{user?.displayName}</a>
            </Navbar.Text>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;

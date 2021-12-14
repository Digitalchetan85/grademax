import React from "react";
import { Container, Nav, Navbar, Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import Logo from "../../Images/logo.png";

const TopMenuBar = () => {
  return (
    <>
      <div className="sticky-top shadow" id="navbar">
        <Navbar
          collapseOnSelect
          expand="lg"
          bg="white"
          variant="light"
          id="navbar"
        >
          <Container>
            <Navbar.Brand >
              <Image src={Logo} className="img-fluid" alt="Logo" />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="ms-auto">
                <Nav.Link as={Link} to="/grademax">
                  HOME
                </Nav.Link>
                <Nav.Link as={Link} to="/about">
                  ABOUT US
                </Nav.Link>
                <Nav.Link as={Link} to="/ready-mix-content">
                  READY MIX CONCRETE
                </Nav.Link>
                <Nav.Link as={Link} to="/pricing">
                  PRICING
                </Nav.Link>
                <Nav.Link as={Link} to="/gallery">
                  GALLERY
                </Nav.Link>
                <Nav.Link as={Link} to="/contact">
                  CONTACT US
                </Nav.Link>
              </Nav>
              {/* <Nav>
              <Nav.Link href="#deets">More deets</Nav.Link>
              <Nav.Link eventKey={2} href="#memes">
                Dank memes
              </Nav.Link>
            </Nav> */}
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
    </>
  );
};

export default TopMenuBar;

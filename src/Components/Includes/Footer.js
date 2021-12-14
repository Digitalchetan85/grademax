import React from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import FooterLogo from "../../Images/footer-logo.png";



const Footer = () => {
  return (
    <div>
      <div id="footer" className="pt-2 pb-2 pt-md-2 pb-md-2 bg-dark text-light">
        <Container>
          <Row>
            <Col md={3} className="align-self-center">
              <div className="text-center">
                <Image src={FooterLogo} alt="" className="img-fluid" />
              </div>
            </Col>
            <Col md={6}></Col>
            <Col md={3} className="float-end">
              <div className="">
                <h2 className="pt-2 pb-2">Quick Links</h2>
                <ul>
                  <li>
                    <Link to="/">Home</Link>
                  </li>
                  <li>
                    <Link to="/about">About Us</Link>
                  </li>
                  <li>
                    <Link to="/ready-mix-content">Ready Mix Content</Link>
                  </li>
                  <li>
                    <Link to="/gallery">Gallery</Link>
                  </li>
                  <li>
                    <Link to="/contact">Contact Us</Link>
                  </li>
                </ul>
              </div>
            </Col>
          </Row>
          <div className="border-top border-light">
            <Row>
              <Col md={12}>
                <p className="text-center text-light m-0 pt-2 pb-1">
                  Copy Rights reserved by Grademax Concrete. Developed by{" "}
                  <Link to="https://logodesignerbangalore.com/" target="_blank">
                    LDCB.
                  </Link>
                </p>
              </Col>
            </Row>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Footer;

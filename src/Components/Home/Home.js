import React from "react";
import { Col, Container, Image, Button } from "react-bootstrap";
import MainSlider from "./../Includes/MainSlider";
import { Row } from "react-bootstrap";
import image from "../../Images/Gallery/image-1.png";
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <MainSlider />
      <div id="content" className="pt-3 pb-3 pt-md-5 pb-md-5">
        <Container>
          <Row>
            <Col md={6} className="align-self-center">
              <div className="">
                <h2 className="pt-2 pb-2 text-center text-primary">
                  Welcome to Grademax Concrete
                </h2>
                <p>
                  Contrary to popular belief, Lorem Ipsum is not simply random
                  text. It has roots in a piece of classical Latin literature
                  from 45 BC, making it over 2000 years old. Richard McClintock,
                  a Latin professor at Hampden-Sydney College in Virginia,
                  looked up one of the more obscure Latin words, consectetur,
                  from a Lorem Ipsum passage, and going through the cites of the
                  word in classical literature, discovered the undoubtable
                  source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of
                  "de Finibus Bonorum et Malorum" (The Extremes of Good and
                  Evil) by Cicero, written in 45 BC. This book is a treatise on
                  the theory of ethics, very popular during the Renaissance. The
                  first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..",
                  comes from a line in section 1.10.32.
                </p>
                <Button className="btn btn-primary text-white" as={Link} to="/about">Read more</Button>
              </div>
            </Col>
            <Col md={6} className="align-self-center">
              <div className="text-center">
                <Image src={image} alt="about" className="img-fluid" />
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default Home;

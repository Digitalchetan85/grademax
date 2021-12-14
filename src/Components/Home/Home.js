import React from "react";
import { Col, Container, Image, Button, Card } from "react-bootstrap";
import MainSlider from "./../Includes/MainSlider";
import { Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import AboutImage from "../../Images/Gallery/image-2.png";
import AboutImage1 from "../../Images/Gallery/image-2.png";
import AboutImage2 from "../../Images/Gallery/image-3.png";
import AboutImage3 from "../../Images/Gallery/image-4.png";
import ServiceImage1 from "../../Images/image-2.png";
import ServiceImage2 from "../../Images/image-3.png";
import ServiceImage3 from "../../Images/image-4.png";

const Home = () => {
  const ServiceData = [
    {
      id: 1,
      title: "Ready Mix Concrete",
      imgURL: ServiceImage1,
      alt: "Concrete",
      description:
        "Ready-mix concrete, or RMC, is concrete that has been manufactured in a batch plant according to specific mix designs. ",
      bntURL: "/ready-mix-content",
    },
    {
      id: 2,
      title: "Types of Ready-Mix Concrete?",
      imgURL: ServiceImage2,
      alt: "Concrete",
      description:
        "Ready mix concrete comes in three types, with each type is determined by the specific mixture of ingredients.",
      bntURL: "/ready-mix-content",
    },
    {
      id: 3,
      title: "Transit Mixed Concrete",
      imgURL: ServiceImage3,
      alt: "Concrete",
      description:
        "Transit mixed concrete is also called dry-batched concrete. In this type of RMC, all of the basic ingredients (including water) are combined in the truck mixer.",
      bntURL: "/ready-mix-content",
    },
  ];
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
                Concrete is a major consideration for most construction projects and with 9 main types of concrete available, finding the type that is right for your job is an important first step. At Al Manaratain, we have a number of concrete products available, including precast concrete, concrete blocks, and concrete pavers, as well as ready mix. We’ve already covered the advantages & disadvantages of precast concrete in Bahrain, but today we’re looking at the different types of ready mix concrete and their advantages.
                </p>
                <div className="text-center">
                  <Button
                    className="btn btn-primary text-white"
                    as={Link}
                    to="/about"
                  >
                    Read more
                  </Button>
                </div>
              </div>
            </Col>
            <Col md={6} className="align-self-center">
              <div className="text-center">
                <Image src={AboutImage} alt="about" className="img-fluid" />
              </div>
            </Col>
          </Row>
        </Container>
      </div>

      <div id="services" className="pt-3 pb-3 pt-md-5 pb-md-5  bg-light">
        <Container>
          <h2 className="pt-2 pb-2 text-center text-white">Services</h2>
          <Row>
            {ServiceData.map((item) => (
              <Col md={4} key={item.id}>
                <Card className="m-1 text-center shadow">
                  <Card.Img
                    variant="top"
                    src={item.imgURL}
                    alt={item.alt}
                    className="img-fluid"
                  />
                  <Card.Body>
                    <Card.Title>{item.title}</Card.Title>
                    <Card.Text>{item.description}</Card.Text>
                    <Button
                      variant="primary"
                      className="text-white"
                      as={Link}
                      to={item.bntURL}
                    >
                      Read More
                    </Button>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </div>

      <div id="home-gallery" className="pt-3 pb-3 pt-md-5 pb-md-5">
        <Container>
          <h2 className="pt-2 pb-2 text-center text-primary">Gallery</h2>
          <Row>
            <Col md={3}>
              <div className="text-center">
                <Image src={AboutImage} alt="" className="img-fluid" />
              </div>
            </Col>
            <Col md={3}>
              <div className="text-center">
                <Image src={AboutImage1} alt="" className="img-fluid" />
              </div>
            </Col>
            <Col md={3}>
              <div className="text-center">
                <Image src={AboutImage2} alt="" className="img-fluid" />
              </div>
            </Col>
            <Col md={3}>
              <div className="text-center">
                <Image src={AboutImage3} alt="" className="img-fluid" />
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default Home;

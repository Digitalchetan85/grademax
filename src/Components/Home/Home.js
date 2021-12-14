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
        "Ready mixed refers to concrete that is batched for delivery from a central plant instead of being mixed on the job site.",
      bntURL: "/services",
    },
    {
      id: 2,
      title: "Concrete",
      imgURL: ServiceImage2,
      alt: "Concrete",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
      bntURL: "/services",
    },
    {
      id: 3,
      title: "Concrete",
      imgURL: ServiceImage3,
      alt: "Concrete",
      description:
        "Ready mixed refers to concrete that is batched for delivery from a central plant instead of being mixed on the job site.",
      bntURL: "/services",
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

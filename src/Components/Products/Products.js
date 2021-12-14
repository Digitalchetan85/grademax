import React from "react";
import { Col, Container, Row, Image } from "react-bootstrap";
import ServiceImage from "../../Images/Gallery/image-1.png";

const Products = () => {
  return (
    <div>
      <div id="products" className="bg-secondary">
        <Container>
          <Row>
            <Col md={12}>
              <div className="pt-5 pb-5">
                <h2 className="text-center text-white">Ready mix Concrete</h2>
              </div>
            </Col>
          </Row>
        </Container>
      </div>

      <div id="services" className="pt-3 pb-3 pt-md-5 pb-md-5">
        <Container>
          <Row>
            <Col md={8}>
              <p className="">
                Ready mixed refers to concrete that is batched for delivery from
                a central plant instead of being mixed on the job site.
              </p>
              <p className="">
                The primary advantages of using ready mix concrete include: a
                high quality product, lower costs, an eco-friendly process, and
                saving time for your business.
              </p>
              <p className="">
                Ready-mix concrete tends to be better for many projects, in
                spite of its higher cost. Ready-mix concrete offers a higher
                quality, and variation between batches is minimal when concrete
                is prepared in a plant environment. Ready-mix concrete is
                normally recommended for projects that require a high volume.
              </p>
              <p className="">
                Ready mix concrete has cement, aggregates, sand, water and other
                chemicals, which are weigh- batched at a centrally located plant
                for a premium quality. The concrete is then delivered to the
                construction site in transit mixers and can be used straight
                away without any further treatment.
              </p>
              <p className="">
                We are committed to providing World Class Solutions to Civil
                Engineering Projects. Our team brings together first-hand
                experience and advanced technologies to solve all your
                infrastructural needs. Our aim is to provide the best service,
                with trust and honesty. Our projects are substantially quicker
                to build than conventional construction also resulting in time
                saving on programme.
              </p>
            </Col>
            <Col md={4} className="align-self-center">
              <div className="text-center">
                <Image src={ServiceImage} alt="" className="img-fluid rounded shadow-sm" />
              </div>
            </Col>
          </Row>
        </Container>
      </div>

      <div id="services-content" className="pt-3 pb-3 pt-md-5 pb-md-5 bg-light">
        <Container>
          <Row>
            <Col md={4} className="align-self-center">
              <div className="m-1 bg-white p-3 rounded shadow">
                <h4 className="pt-2 pb-2">What is Ready Mixed Concrete</h4>
                <p className="">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer
                </p>
                <p className="">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer
                </p>
              </div>
            </Col>
            <Col md={4} className="align-self-center">
              <div className="m-1 bg-white p-3 rounded shadow">
                <h4 className="pt-2 pb-2">RMX - Adding value to concrete</h4>
                <p className="">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer
                </p>
                <p className="">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer
                </p>
              </div>
            </Col>
            <Col md={4} className="align-self-center">
              <div className="m-1 bg-white p-3 rounded shadow">
                <h4 className="pt-2 pb-2">
                  RMC - State-of-the-art Solution
                </h4>
                <p className="">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer
                </p>
                <p className="">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer
                </p>
              </div>
            </Col>
            <Col md={4} className="align-self-center">
              <div className="m-1 bg-white p-3 rounded shadow">
                <h4 className="pt-2 pb-2">Quality - 'Q' factor in RMC</h4>
                <p className="">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer
                </p>
                <p className="">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer
                </p>
              </div>
            </Col>
            <Col md={4} className="align-self-center">
              <div className="m-1 bg-white p-3 rounded shadow">
                <h4 className="pt-2 pb-2">Customer Service - Dependable</h4>
                <p className="">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer
                </p>
                <p className="">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default Products;

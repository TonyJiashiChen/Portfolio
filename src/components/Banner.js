import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";
import headerImg from "../assets/img/header-img.svg";

export const Banner = () => {
  const toRotate = ["Web Developer", "Software Developer", "Cloud Engineer"];
  
  return (
    <section className="banner" id="home">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={6} xl={7}>
            <span className="tagline">Welcome to my Portfolio</span>
            <h1>
              {`Hi I'm Tony`}
              <span className="wrap">Software Developer</span>
            </h1>
            <p>
              Final year Master of Information Technology student with
              experience working as software engineer in the blockchain
              industry. Awarded research scholarship 
              and completed IT industry
              placement with Monash University where I gained both programming
              and leadership skills. Looking for a role in the IT industry as a
              full-stack or back-end developer which will allow me to keep
              developing and exploring new technologies.
            </p>
            <button onClick={() => console.log("connect clicked")}>
              Let's connect <ArrowRightCircle size={25} />
            </button>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <img src={headerImg} alt="Header Img"></img>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

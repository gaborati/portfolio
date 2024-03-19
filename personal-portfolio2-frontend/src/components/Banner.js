import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import headerImg from "../assets/img/header-img.svg";
import { ArrowRightCircle } from "react-bootstrap-icons"
import 'animate.css';
import TrackVisibility from 'react-on-screen';
export const Banner = () => {

    const [text, setText] = useState('');



    return (
        <section className="banner" id="home">
            <Container>
                    <Row className="aligh-items-center">
                        <Col xs={12} md={6} xl={7}>
                            <TrackVisibility>
                                {({ isVisible }) =>
                                    <div >
                                        <span className="tagline">Welcome to my Portfolio</span>
                                        <h1>{`Hi! I'm Ati Full-Stack Developer`}</h1>
                                        <p>Throughout my life, I have worked in environments that prioritize both physical and mental well-being. Embracing demanding training programs and a purposeful lifestyle, I have acquired valuable insights into the critical roles of time management and self-discipline. These experiences have not only enhanced my ability to navigate daily challenges more efficiently but have also fortified my determination towards achieving the goals I aspire to reach.I'm skilled in Java backend development, enabling me to create robust and scalable solutions for various challenges. Furthermore In React frontend development, I can create interfaces that not only look good but also work smoothly.</p>
                                    </div>}
                            </TrackVisibility>
                        </Col>
                        <Col xs={12} md={6} xl={5}>
                            <TrackVisibility>
                                {({ isVisible }) =>
                                    <div className={isVisible ? "animate__animated animate__zoomIn" : ""}>
                                        <img src={headerImg} alt="Header Img"/>
                                    </div>}
                            </TrackVisibility>
                        </Col>
                    </Row>

            </Container>
        </section>
    )
}
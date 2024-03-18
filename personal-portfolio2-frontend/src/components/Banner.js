import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import headerImg from "/Users/gaborattila/Desktop/portfolio/personal-portfolio2-frontend/src/assets/img/header-img.svg";
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
                                        <h1>{`Hi! I'm Ati Full-Stack Developer`} <span className="txt-rotate" dataPeriod="1000" data-rotate='[ "Web Developer" ]'><span className="wrap">{text}</span></span></h1>
                                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
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
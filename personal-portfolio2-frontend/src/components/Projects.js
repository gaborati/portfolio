import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/bruteForce.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import TrackVisibility from "react-on-screen";

export const Projects = () => {

    const projects = [

        {
            projectId:1,
            title: "BruteForce",
            description: "Java OOP",
            imgUrl: projImg1,
            githubLink: "https://github.com/CodecoolGlobal/bruteforce-java-gaborati"
        },
        {
            title: "Survey",
            description: "Full-stack application with PHP and React ",
            imgUrl: projImg1,
            githubLink: ""
        },
        {
            title: "Plantify",
            description:`Full-stack Java and React application
under development`,
            imgUrl: projImg1,
            githubLink: "https://github.com/CodecoolGlobal/el-proyecte-grande-sprint-1-java-Laszlo-Varga"
        },
    ];

    return (
        <section className="project" id="projects">
            <Container>
                <Row>
                    <Col size={12}>
                        <TrackVisibility>
                            {({ isVisible }) =>
                                <div className={isVisible }>
                                    <h2>Projects</h2>
                                    <Tab.Container id="projects-tabs" defaultActiveKey="first">
                                        <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                                            <Nav.Item>
                                                <Nav.Link eventKey="first">Tab 1</Nav.Link>
                                            </Nav.Item>
                                            <Nav.Item>
                                                <Nav.Link eventKey="second">Tab 2</Nav.Link>
                                            </Nav.Item>
                                            <Nav.Item>
                                                <Nav.Link eventKey="third">Tab 3</Nav.Link>
                                            </Nav.Item>
                                        </Nav>
                                        <Tab.Content id="slideInUp" className={isVisible}>
                                            <Tab.Pane eventKey="first">
                                                <Row>
                                                    {projects.map((project, index) => (
                                                        <ProjectCard
                                                            key={index}
                                                            {...project}
                                                        />
                                                    ))}
                                                </Row>
                                            </Tab.Pane>
                                            <Tab.Pane eventKey="section">
                                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
                                            </Tab.Pane>
                                            <Tab.Pane eventKey="third">
                                            </Tab.Pane>
                                        </Tab.Content>
                                    </Tab.Container>
                                </div>}
                        </TrackVisibility>
                    </Col>
                </Row>
            </Container>
            <img className="background-image-right" src={colorSharp2}></img>
        </section>
    )
}
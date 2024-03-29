import React from "react";
import { Col } from "react-bootstrap";

export const ProjectCard = ({ title, description, imgUrl, githubLink }) => {
    const handleGitHubRedirect = () => {
        window.open(githubLink, "_blank") // A link megnyitása az aktuális ablakban
    };

    return (
        <Col size={12} sm={6} md={4}>
            <div className="proj-imgbx" onClick={handleGitHubRedirect}>
                <img src={imgUrl} />
                <div className="proj-txtx">
                    <h5>{title}</h5>
                    <span>{description}</span>
                </div>
            </div>
        </Col>
    )
}
import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import emailjs from "@emailjs/browser";
import "animate.css";
import TrackVisibility from "react-on-screen";

export const Contact = () => {
    const [form, setForm] = useState({
        name: "",
        email: "",
        message: "",
    });

    const [loading, setLoading] = useState(false);


    const handleChange = (e) => {
        const { target } = e;
        const { name, value } = target;

        setForm({
            ...form,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);

        emailjs
            .send(
                process.env.REACT_APP_SERVICE , process.env.REACT_APP_TEMPLATE,
                {
                    from_name: form.name,
                    to_name: process.env.REACT_APP_NAME ,
                    from_email: form.email,
                    to_email: process.env.REACT_APP_EMAIL,
                    message: form.message,
                },
                process.env.REACT_APP_CODE,
            )
            .then(
                () => {
                    setLoading(false);
                    alert("Thank you. I will get back to you as soon as possible.");

                    setForm({
                        name: "",
                        email: "",
                        message: "",
                    });
                },
                (error) => {
                    setLoading(false);
                    console.error(error);

                    alert("Ahh, something went wrong. Please try again.");
                }
            );
    };

    return (
        <section className="contact" id="connect">
            <Container>
                <Row className="justify-content-center align-items-center">
                    <Col xs={12} md={6}>
                        <TrackVisibility>
                            {({ isVisible }) =>
                                <div className={isVisible}>
                                    <h2>Get In Touch</h2>
                                    <form onSubmit={handleSubmit}>
                                        <Row>
                                            <Col xs={12} sm={6} className="px-1">
                                                <input type="text" value={form.name}
                                                       placeholder="Name"
                                                       name="name"
                                                       onChange={handleChange}/>
                                            </Col>
                                            <Col xs={12} sm={6} className="px-1">
                                                <input type="email" value={form.email}
                                                       placeholder="Email Address"
                                                       name="email"
                                                       onChange={handleChange}/>
                                            </Col>
                                            <Col xs={12} className="px-1">
                                                <textarea rows="6" value={form.message} placeholder="Message"
                                                          name="message"
                                                          onChange={handleChange}></textarea>
                                            </Col>
                                            <Col xs={12} className="px-1">
                                                <button type="submit" disabled={loading}>
                                                    {loading ? 'Sending...' : 'Send'}
                                                </button>
                                            </Col>
                                        </Row>
                                    </form>
                                </div>}
                        </TrackVisibility>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

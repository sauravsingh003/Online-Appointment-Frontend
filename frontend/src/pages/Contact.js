import React, { useState } from "react";
import { Container, Row, Col, Form, Button, Card } from "react-bootstrap";

const Contact = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });

    const handleChange = (e) => {
        setFormData((prev) => ({
            ...prev,
            [e.target.name]: e.target.value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // You can add logic here to send form data to backend or email
        alert("Message sent successfully!");
        setFormData({ name: "", email: "", message: "" });
    };

    return (
        <div className="py-5 bg-white">
            <Container>
                <Row className="mb-4">
                    <Col>
                        <h2 className="text-center mb-3">Contact Us</h2>
                        <p className="text-center text-muted">
                            We'd love to hear from you! Fill out the form below or reach us directly.
                        </p>
                    </Col>
                </Row>

                <Row className="g-4">
                    <Col md={6}>
                        <Card className="shadow-sm">
                            <Card.Body>
                                <Card.Title>📬 Send a Message</Card.Title>
                                <Form onSubmit={handleSubmit}>
                                    <Form.Group className="mb-3" controlId="formName">
                                        <Form.Label>Name</Form.Label>
                                        <Form.Control
                                            type="text"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            required
                                        />
                                    </Form.Group>

                                    <Form.Group className="mb-3" controlId="formEmail">
                                        <Form.Label>Email</Form.Label>
                                        <Form.Control
                                            type="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            required
                                        />
                                    </Form.Group>

                                    <Form.Group className="mb-3" controlId="formMessage">
                                        <Form.Label>Message</Form.Label>
                                        <Form.Control
                                            as="textarea"
                                            rows={4}
                                            name="message"
                                            value={formData.message}
                                            onChange={handleChange}
                                            required
                                        />
                                    </Form.Group>

                                    <Button variant="primary" type="submit">
                                        Send Message
                                    </Button>
                                </Form>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col md={6}>
                        <Card className="shadow-sm h-100">
                            <Card.Body>
                                <Card.Title>📞 Contact Information</Card.Title>
                                <p>
                                    <strong>Email:</strong> support@docapp.com
                                </p>
                                <p>
                                    <strong>Phone:</strong> +91-XXXXXXXXXXX
                                </p>
                                <hr />

                                <p>
                                    <strong>Connect with Us:</strong><br />
                                    🌐 <a href="https://www.linkedin.com/company/healthapp" target="_blank" rel="noreferrer">LinkedIn</a><br />
                                    🐦 <a href="https://twitter.com/healthapp" target="_blank" rel="noreferrer">Twitter</a><br />
                                    📘 <a href="https://facebook.com/healthapp" target="_blank" rel="noreferrer">Facebook</a>
                                </p>

                                <hr />

                                <p>
                                    <strong>Need Help?</strong><br />
                                    💬 <a href="/livechat">Chat with Support</a><br />
                                    📖 <a href="/faq">Visit our FAQ</a><br />
                                    📝 <a href="/feedback">Leave Feedback</a>
                                </p>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Contact;

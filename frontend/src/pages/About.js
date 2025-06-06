import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";

const About = () => {
  return (
    <div className="py-5 bg-light">
      <Container>
        <Row className="mb-4">
          <Col>
            <h2 className="text-center mb-3">About Us</h2>
            <p className="text-center text-muted">
              Welcome to our Online Appointment Scheduling System – where technology meets healthcare to make your life easier.
            </p>
          </Col>
        </Row>

        <Row className="g-4">
          <Col md={6}>
            <Card className="h-100 shadow-sm">
              <Card.Body>
                <Card.Title>🩺 Our Mission</Card.Title>
                <Card.Text>
                  Our mission is to simplify the healthcare experience by providing a platform that connects patients with healthcare professionals seamlessly and efficiently.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          <Col md={6}>
            <Card className="h-100 shadow-sm">
              <Card.Body>
                <Card.Title>💡 What We Offer</Card.Title>
                <Card.Text>
                  - Easy online booking<br />
                  - Doctor and patient dashboards<br />
                  - Real-time notifications<br />
                  - Secure login with JWT<br />
                  - Appointment history tracking
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          <Col md={6}>
            <Card className="h-100 shadow-sm">
              <Card.Body>
                <Card.Title>👨‍⚕️ Who Can Use It?</Card.Title>
                <Card.Text>
                  <strong>Patients:</strong> Book and manage doctor visits<br />
                  <strong>Doctors:</strong> Manage appointments and availability<br />
                  <strong>Admins:</strong> Oversee the platform and users
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          <Col md={6}>
            <Card className="h-100 shadow-sm">
              <Card.Body>
                <Card.Title>⚙️ Technologies Used</Card.Title>
                <Card.Text>
                  - React.js + Bootstrap (Frontend)<br />
                  - Spring Boot + MySQL (Backend)<br />
                  - JWT Authentication & Role-based Access<br />
                  - REST APIs for communication
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        <Row className="mt-5">
          <Col>
            <h4 className="text-center">💬 Get in Touch</h4>
            <p className="text-center text-muted">
              For any queries or support, feel free to reach out to our team.
            </p>
            <p className="text-center">
              📧 <strong>Email:</strong> support@docapp.com<br />
              📞 <strong>Phone:</strong> +91-XXXXXXXXXX
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default About;

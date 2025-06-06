import { useState } from 'react';
import { Container, Row, Col, Form, Button, Card } from 'react-bootstrap';

function BookAppointment() {
  const [form, setForm] = useState({ doctor: '', date: '', time: '' });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`✅ Appointment booked with ${form.doctor} on ${form.date} at ${form.time}`);
    setForm({ doctor: '', date: '', time: '' });
  };

  return (
    <div className="py-5 bg-light">
      <Container>
        <Row className="mb-4">
          <Col>
            <h2 className="text-center mb-3">Book Your Appointment</h2>
            <p className="text-center text-muted">
              Choose a doctor and schedule your appointment with ease.
            </p>
          </Col>
        </Row>

        <Row className="justify-content-center">
          <Col md={6}>
            <Card className="shadow-sm">
              <Card.Body>
                <Form onSubmit={handleSubmit}>
                  <Form.Group className="mb-3" controlId="formDoctor">
                    <Form.Label>Doctor Name</Form.Label>
                    <Form.Control
                      type="text"
                      name="doctor"
                      placeholder="Enter doctor's name"
                      value={form.doctor}
                      onChange={handleChange}
                      required
                    />
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="formDate">
                    <Form.Label>Appointment Date</Form.Label>
                    <Form.Control
                      type="date"
                      name="date"
                      value={form.date}
                      onChange={handleChange}
                      required
                    />
                  </Form.Group>

                  <Form.Group className="mb-4" controlId="formTime">
                    <Form.Label>Appointment Time</Form.Label>
                    <Form.Control
                      type="time"
                      name="time"
                      value={form.time}
                      onChange={handleChange}
                      required
                    />
                  </Form.Group>

                  <div className="d-grid">
                    <Button variant="primary" type="submit">
                      Book Appointment
                    </Button>
                  </div>
                </Form>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default BookAppointment;

import { React, useEffect } from "react";
import { Form, Button, Row, Col, Breadcrumb } from "react-bootstrap";
import { useParams, Link } from "react-router-dom";

function SignupForm() {
  let { postSlug } = useParams();

  useEffect(() => {
    // Fetch post using the postSlug
  }, [postSlug]);

  return (
    <Form className="w-50 position-absolute top-50 start-50 translate-middle">
      <Row>
        <Col>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Vorname</Form.Label>
            <Form.Control type="text" placeholder="Vornamen eingeben" />
            <Form.Text className="text-muted"></Form.Text>
          </Form.Group>
        </Col>
        <Col>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Nachname</Form.Label>
            <Form.Control type="text" placeholder="Nachnamen eingeben" />
            <Form.Text className="text-muted"></Form.Text>
          </Form.Group>
        </Col>
      </Row>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>E-Mail Adresse</Form.Label>
        <Form.Control type="email" placeholder="E-Mail Adresse eingeben" />
      </Form.Group>

      <Row>
        <Col>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Passwort</Form.Label>
            <Form.Control type="password" placeholder="Passwort" />
          </Form.Group>
        </Col>
        <Col>
          <Form.Group className="py-2" controlId="formBasicPassword">
            <Form.Label></Form.Label>
            <Form.Control type="password" placeholder="Passwort bestätigen" />
          </Form.Group>
        </Col>
      </Row>

      <Button className="mb-1" href="#" variant="primary" type="submit">
        Registrieren
      </Button>

      <Breadcrumb>
        <Breadcrumb.Item>
          <Link to="/login">Login</Link>
        </Breadcrumb.Item>
      </Breadcrumb>
    </Form>
  );
}

export default SignupForm;

import { React, useEffect } from "react";
import { Form, Button, Breadcrumb, Row, Container } from "react-bootstrap";
import { useParams, Link } from "react-router-dom";

function LoginForm() {
  let { postSlug } = useParams();

  useEffect(() => {
    // Fetch post using the postSlug
  }, [postSlug]);

  return (
    <Container>
      <Row className="justify-content-center">
        <Form md={8}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>E-Mail Adresse</Form.Label>
            <Form.Control type="email" placeholder="E-Mail Adresse eingeben" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Passwort</Form.Label>
            <Form.Control type="password" placeholder="Passwort" />
          </Form.Group>

          <Button className="mb-1" href="#" variant="primary" type="submit">
            Login
          </Button>

          <Breadcrumb>
            <Breadcrumb.Item>
              <Link to="/signup">Registrieren</Link>
            </Breadcrumb.Item>
          </Breadcrumb>
        </Form>
      </Row>
    </Container>
  );
}

export default LoginForm;

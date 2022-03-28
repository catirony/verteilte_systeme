import React from "react";
import { Form, FormControl, Button, Row, Col, Breadcrumb } from "react-bootstrap";

function LoginForm() {
  return (
    <Form className="w-50 position-absolute top-50 start-50 translate-middle">
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
        <Breadcrumb.Item href="#">Registrieren</Breadcrumb.Item>
      </Breadcrumb>
    </Form>
  );
}

export default LoginForm;

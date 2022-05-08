import { React, useEffect, useState } from "react";
import { Form, Button, Row, Col, Breadcrumb } from "react-bootstrap";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import { lastDayOfYear } from "date-fns/esm";

function SignupForm() {
  return (
    <Form className="w-100 position-absolute top-50 start-50 translate-middle px-2">
      <Row>
        <Col>
          <Form.Group className="mb-3" controlId="formBasicText" name="first">
            <Form.Label>Vorname</Form.Label>
            <Form.Control type="text" placeholder="Vornamen eingeben" />
            <Form.Text className="text-muted"></Form.Text>
          </Form.Group>
        </Col>
        <Col>
          <Form.Group className="mb-3" controlId="formBasicText" name="last">
            <Form.Label>Nachname</Form.Label>
            <Form.Control type="text" placeholder="Nachnamen eingeben" />
            <Form.Text className="text-muted"></Form.Text>
          </Form.Group>
        </Col>
      </Row>

      <Form.Group className="mb-3" controlId="formBasicEmail" name="email">
        <Form.Label>E-Mail Adresse</Form.Label>
        <Form.Control type="email" placeholder="E-Mail Adresse eingeben" />
      </Form.Group>

      <Row>
        <Col>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Passwort</Form.Label>
            <Form.Control type="password" placeholder="Passwort" name="password" />
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

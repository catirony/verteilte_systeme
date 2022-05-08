import { React, useEffect } from "react";
import { Row, Col } from "react-bootstrap";
import { Form, InputGroup, FormControl, Button, Breadcrumb } from "react-bootstrap";
import { useParams, Link } from "react-router-dom";

function EventForm() {
  return (
    <div>
      <h2 className="px-2">Titel des Termins</h2>

      <Form className="px-2">
        <Row>
          <Col>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Datum</Form.Label>
              <Form.Control type="date" placeholder="" />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Uhrzeit</Form.Label>
              <Form.Control type="time" placeholder="" />
            </Form.Group>
          </Col>
        </Row>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Ort</Form.Label>
          <Form.Control type="text" placeholder="Ort eingeben" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>Kontaktdaten</Form.Label>
          <Form.Control as="textarea" rows={3} />
        </Form.Group>

        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>Beschreibung</Form.Label>
          <Form.Control as="textarea" rows={3} />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Check aria-label="option 1" />
          <Form.Check aria-label="option 1" />
          <Form.Check aria-label="option 1" />
          <Form.Check aria-label="option 1" />
        </Form.Group>
      </Form>

      <Button className="mb-1 mx-2" href="#" variant="primary" type="submit">
        Termin erstellen
      </Button>
    </div>
  );
}

export default EventForm;

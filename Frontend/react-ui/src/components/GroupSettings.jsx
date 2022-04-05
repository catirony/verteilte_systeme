import { React, useEffect } from "react";
import { Card, Form, Row, Col, Button, Breadcrumb, InputGroup, FormControl, ListGroup, Badge } from "react-bootstrap";
import { useParams, Link } from "react-router-dom";

function GroupSettings() {
  let { postSlug } = useParams();

  useEffect(() => {
    // Fetch post using the postSlug
  }, [postSlug]);

  return (
    <Form className="px-2">
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Gruppenname ändern</Form.Label>
        <Form.Control type="text" placeholder="Nachnamen eingeben" />
        <Form.Text className="text-muted"></Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Gruppenpassowrt ändern</Form.Label>
        <Form.Control type="text" placeholder="Vornamen eingeben" />
        <Form.Text className="text-muted"></Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Beschreibung</Form.Label>
        <Form.Control as="textarea" rows={3} />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Gruppenteilnehmer</Form.Label>
        <ListGroup as="ul">
          <ListGroup.Item as="li" className="d-flex justify-content-between align-items-start">
            <div className="m-2 me-auto">Name</div>
            <Button>entfernen</Button>
          </ListGroup.Item>
          <ListGroup.Item as="li" className="d-flex justify-content-between align-items-start">
            <div className="m-2 me-auto">Name</div>
            <Button>entfernen</Button>
          </ListGroup.Item>
          <ListGroup.Item as="li" className="d-flex justify-content-between align-items-start">
            <div className="m-2 me-auto">Name</div>
            <Button>entfernen</Button>
          </ListGroup.Item>
        </ListGroup>
      </Form.Group>

      <InputGroup className="mb-3">
        <FormControl placeholder="Nach Name oder E-Mail suchen" aria-label="Recipient's username" aria-describedby="basic-addon2" />
        <Button id="button-addon2">Teilnehmer hinzufügen</Button>
      </InputGroup>

      <Button className="mb-1" href="#" variant="primary" type="submit">
        Speichern
      </Button>
    </Form>
  );
}

export default GroupSettings;

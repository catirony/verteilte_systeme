import React from "react";
import { Navbar, Container, Nav, NavDropdown, Offcanvas, Form, FormControl, Button } from "react-bootstrap";

function Navigation() {
  <Navbar bg="light" expand={false}>
    <Container fluid>
      <Navbar.Toggle aria-controls="offcanvasNavbar" />
      <Navbar.Brand href="#">Name der Applikation</Navbar.Brand>
      <Navbar.Offcanvas id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel" placement="start">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title id="offcanvasNavbarLabel">Navbar</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Nav className="justify-content-end flex-grow-1 pe-3">
            <Form className="d-flex">
              <FormControl type="search" placeholder="Search" className="me-2" aria-label="Search" />
              <Button variant="outline-success">Search</Button>
            </Form>
            <Nav.Link className="nav-link" to="/refresh">
              Aktualisieren
            </Nav.Link>
            <Nav.Link className="nav-link" to="/statistics">
              Statistiken
            </Nav.Link>
            <Nav.Link className="nav-link" to="/administration">
              Familie verwalten
            </Nav.Link>

            <NavDropdown title="Termine" id="offcanvasNavbarDropdown">
              <NavDropdown.Item href="/day">Tag</NavDropdown.Item>
              <NavDropdown.Item href="/week">Woche</NavDropdown.Item>
              <NavDropdown.Item href="/month">Monat</NavDropdown.Item>
              <NavDropdown.Item href="/allEvents">Alle Termine</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/createNewEvent">Neuen Termin anlegen</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link className="nav-link" to="/settings">
              Einstellungen
            </Nav.Link>
            <Nav.Link className="nav-link" to="/">
              Logout
            </Nav.Link>
          </Nav>
        </Offcanvas.Body>
      </Navbar.Offcanvas>
    </Container>
  </Navbar>;
}

export default Navigation;

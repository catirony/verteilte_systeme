import logo from "./logo.svg";
import "./App.css";
import {
  Navbar,
  Container,
  Nav,
  NavDropdown,
  Offcanvas,
  Form,
  FormControl,
  Button,
  Row,
  Breadcrumb,
} from "react-bootstrap";
import { Col } from "react-bootstrap";

function App() {
  return (
    <div>
      <Navbar bg="light" expand={false}>
        <Container fluid>
          <Navbar.Toggle aria-controls="offcanvasNavbar" />
          <Navbar.Brand href="#">Name der Applikation</Navbar.Brand>
          <Navbar.Offcanvas
            id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel"
            placement="start"
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id="offcanvasNavbarLabel">
                Navbar
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="justify-content-end flex-grow-1 pe-3">
                <Form className="d-flex">
                  <FormControl
                    type="search"
                    placeholder="Search"
                    className="me-2"
                    aria-label="Search"
                  />
                  <Button variant="outline-success">Search</Button>
                </Form>
                <Nav.Link href="#action1">Aktualisieren</Nav.Link>
                <Nav.Link href="#action7">Statistiken</Nav.Link>
                <Nav.Link href="#action8">Familie verwalten</Nav.Link>

                <NavDropdown title="Termine" id="offcanvasNavbarDropdown">
                  <NavDropdown.Item href="#action2">Tag</NavDropdown.Item>
                  <NavDropdown.Item href="#action3">Woche</NavDropdown.Item>
                  <NavDropdown.Item href="#action4">Monat</NavDropdown.Item>
                  <NavDropdown.Item href="#action5">
                    Alle Termine
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action6">
                    Neuen Termin anlegen
                  </NavDropdown.Item>
                </NavDropdown>
              </Nav>
              <img src="Frontend/react-ui/node_modules/bootstrap-icons/icons/bootstrap.svg"></img>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>

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
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Passwort bestätigen</Form.Label>
              <Form.Control type="password" placeholder="Passwort bestätigen" />
            </Form.Group>
          </Col>
        </Row>

        <Button href="#" variant="primary" type="submit">
          Registrieren
        </Button>

        <Breadcrumb>
          <Breadcrumb.Item href="#">Login</Breadcrumb.Item>
        </Breadcrumb>
      </Form>
    </div>
  );
}

export default App;

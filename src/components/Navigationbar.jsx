import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import{Link} from "react-router-dom";

function Navigationbar() {
  return (
    <>
        <Navbar key="md" bg="dark" variant="dark" expand="md" className="mb-3">
          <Container fluid>
            <Navbar.Brand href="#">Navbar Offcanvas</Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-"md"`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-"md"`}
              aria-labelledby={`offcanvasNavbarLabel-expand-"md"`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-"md"`}>
                  Offcanvas
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  <Nav.Link as={Link} to="/">
                    Home
                  </Nav.Link>
                  <Nav.Link as={Link} to="/interestcalculator">
                  Interest Calculator 
                  </Nav.Link>
                  <NavDropdown
                    title="Offers"
                    id={`offcanvasNavbarDropdown-expand-"md"`}
                  >
                    <NavDropdown.Item as={Link} to="/switchoffers">Switch Offers</NavDropdown.Item>
                    <NavDropdown.Item href="#action4">
                      Deals
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action5">
                      Something else here
                    </NavDropdown.Item>
                  </NavDropdown>
                </Nav>
                <Form className="d-flex">
                  <Form.Control
                    type="search"
                    placeholder="Search"
                    className="me-2"
                    aria-label="Search"
                  />
                  <Button variant="outline-success">Search</Button>
                </Form>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
    </>
  );
}

export default Navigationbar;
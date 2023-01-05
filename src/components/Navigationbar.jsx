import { useState } from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Offcanvas from "react-bootstrap/Offcanvas";
import { Link } from "react-router-dom";

function Navigationbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showDropdown, setShowDropdow] = useState({
    saving: false,
    offers: false,
  });

  function openMenu() {
    setMenuOpen(true);
    setShowDropdow({
      saving: false,
      offers: false,
    });
  }

  function closeMenu() {
    setMenuOpen(false);
    setShowDropdow({
      saving: false,
      offers: false,
    });
  }

  function dropdownShow(e) {
    setShowDropdow((prevState) => {
      const temp = e.target.id.split(" ")[1];

      return window.innerWidth > 768 && { ...prevState, [temp]: true };
    });
  }

  function dropdownClose(e) {
    setShowDropdow(
      window.innerWidth > 768 && {
        saving: false,
        offers: false,
      }
    );
  }

  return (
    <>
      <Navbar key="md" bg="dark" variant="dark" expand="md" className="mb-3">
        <Container fluid>
          <Navbar.Brand as={Link} to="/">
            Navbar Offcanvas
          </Navbar.Brand>
          <Navbar.Toggle
            aria-controls={`offcanvasNavbar-expand-"md"`}
            onClick={openMenu}
          />

          <Navbar.Offcanvas
            id={`offcanvasNavbar-expand-"md"`}
            aria-labelledby={`offcanvasNavbarLabel-expand-"md"`}
            placement="end"
            show={menuOpen}
            onHide={closeMenu}
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id={`offcanvasNavbarLabel-expand-"md"`}>
                Offcanvas
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="justify-content-end flex-grow-1 pe-3">
                <Nav.Link as={Link} to="/" onClick={closeMenu}>
                  Home
                </Nav.Link>
                <NavDropdown
                  title="Saving Accounts"
                  id={`offcanvasNavbarDropdown-expand-"md" saving`}
                  show={showDropdown.saving}
                  onMouseEnter={dropdownShow}
                  onMouseLeave={dropdownClose}
                  style={{ marginTop: "0px" }}
                >
                  <NavDropdown.Item
                    as={Link}
                    to="/saving/currentaccount"
                    onClick={closeMenu}
                  >
                    Current Account
                  </NavDropdown.Item>
                  <NavDropdown.Item
                    as={Link}
                    to="/saving/regsaver"
                    onClick={closeMenu}
                  >
                    Regular Saver Account
                  </NavDropdown.Item>
                  <NavDropdown.Item
                    as={Link}
                    to="/saving/fixed"
                    onClick={closeMenu}
                  >
                    Fixed Saving Account
                  </NavDropdown.Item>
                </NavDropdown>
                <Nav.Link as={Link} to="/calculator" onClick={closeMenu}>
                  Interest Calculator
                </Nav.Link>
                <NavDropdown
                  title="Offers"
                  id={`offcanvasNavbarDropdown-expand-"md" offers`}
                  show={showDropdown.offers}
                  onMouseEnter={dropdownShow}
                  onMouseLeave={dropdownClose}
                  style={{ marginTop: "0px" }}
                >
                  <NavDropdown.Item
                    as={Link}
                    to="/switchoffers"
                    onClick={closeMenu}
                  >
                    Switch Offers
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action4" onClick={closeMenu}>
                    Deals
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action5" onClick={closeMenu}>
                    Something else here
                  </NavDropdown.Item>
                </NavDropdown>
                <Nav.Link as={Link} to="/contact" onClick={closeMenu}>
                  Contact
                </Nav.Link>
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

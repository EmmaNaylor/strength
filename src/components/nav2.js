import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Offcanvas from "react-bootstrap/Offcanvas";
import logo from "../assets/smallStrength.png";
import "../styles/home.css";

function OffcanvasExample() {
  const expand = false;
  return (
    <div className="nav-surround">
        <Navbar key={expand} bg="light" expand={expand} className="mb-3">
          <Container fluid>
            <Navbar.Brand href="#"><img src={logo} /></Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  A Strength In You
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  <NavDropdown
                    title="Treatments"
                    id={`offcanvasNavbarDropdown-expand-${expand}`}
                  >
                    <NavDropdown.Item href="/services/all_treatments">
                      All Treatments
                    </NavDropdown.Item>
                    <NavDropdown.Item href="/services/iv_nutrient_therapy">
                      IV Nutrient Therapy
                    </NavDropdown.Item>
                    <NavDropdown.Item href="/services/colonic_hydrotherapy">
                      Colonic Hydrotherapy
                    </NavDropdown.Item>
                    <NavDropdown.Item href="/services/craniosacral_therapy">
                      Craniosacral Therapy
                    </NavDropdown.Item>
                    <NavDropdown.Item href="/services/somato_emotional_release">
                      Somato Emotional Release
                    </NavDropdown.Item>
                    <NavDropdown.Item href="/services/life_coaching">
                      Life Coaching
                    </NavDropdown.Item>
                    <NavDropdown.Item href="/services/nutritional_therapy">
                      Nutritional Therapy
                    </NavDropdown.Item>
                    <NavDropdown.Item href="/services/meditation">
                      Meditation
                    </NavDropdown.Item>
                    <NavDropdown.Item href="/services/reiki_seichem">
                      Reiki and Seichem
                    </NavDropdown.Item>
                    <NavDropdown.Item href="/services/massage_therapy">
                      Massage Therapy
                    </NavDropdown.Item>
                  </NavDropdown>
                  <Nav.Link href="/home">Home</Nav.Link>
                  <Nav.Link href="/about">About</Nav.Link>
                  <Nav.Link href="/testimonials">Testimonials</Nav.Link>
                  <Nav.Link href="/contact">Contact Me</Nav.Link>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
    </div>
  );
}

export default OffcanvasExample;

import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Offcanvas from "react-bootstrap/Offcanvas";
import logo from "../assets/smallStrength.png";
import "../styles/home.css";

const Navigation = () => {
  const expand = false;
  return (
    <div className="nav-surround">
      <Navbar key={expand} expand={expand} className="mb-3" style={{ backgroundColor: '#036c7b' }} >
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
                <Nav className="justify-content-end flex-grow-1 flex-shrink-1 pe-3">
                  <Nav.Link href="/home" style={{color: 'white' }}>Home</Nav.Link>
                <Nav.Link href="/about" style={{color: 'white' }}>About</Nav.Link>
                <NavDropdown
                    title="Treatments"
                    id={`offcanvasNavbarDropdown-expand-${expand}`}
                    
                  >
                    <NavDropdown.Item href="/services/all_treatments" style={{color: 'white', backgroundColor: '#036c7b' }}>
                      All Treatments
                    </NavDropdown.Item>
                    <NavDropdown.Item href="/services/iv_nutrient_therapy" style={{color: 'white', backgroundColor: '#036c7b' }}>
                      IV Nutrient Therapy
                    </NavDropdown.Item>
                    <NavDropdown.Item href="/services/colonic_hydrotherapy" style={{color: 'white', backgroundColor: '#036c7b' }}>
                      Colonic Hydrotherapy
                  </NavDropdown.Item>
                  <NavDropdown.Item href="/services/tympa" style={{color: 'white', backgroundColor: '#036c7b' }}>
                      Ear Examination and Microsuction
                    </NavDropdown.Item>
                    <NavDropdown.Item href="/services/craniosacral_therapy" style={{color: 'white', backgroundColor: '#036c7b' }}>
                      CranioSacral Therapy
                    </NavDropdown.Item>
                    <NavDropdown.Item href="/services/somato_emotional_release" style={{color: 'white', backgroundColor: '#036c7b' }}>
                      Somato Emotional Release
                    </NavDropdown.Item>
                    <NavDropdown.Item href="/services/health_coaching" style={{color: 'white', backgroundColor: '#036c7b' }}>
                      Health Coaching
                    </NavDropdown.Item>
                    <NavDropdown.Item href="/services/nutritional_therapy" style={{color: 'white', backgroundColor: '#036c7b' }}>
                    Nutritional Assessment and Guidance
                    </NavDropdown.Item>
                    <NavDropdown.Item href="/services/meditation" style={{color: 'white', backgroundColor: '#036c7b' }}>
                      Meditation
                    </NavDropdown.Item>
                    <NavDropdown.Item href="/services/reiki_seichem" style={{color: 'white', backgroundColor: '#036c7b' }}>
                      Reiki and Seichem
                    </NavDropdown.Item>
                  </NavDropdown>
                  <Nav.Link href="/testimonials" style={{color: 'white' }}>Testimonials</Nav.Link>
                  <Nav.Link href="/book" style={{color: 'white' }}>Book</Nav.Link>
                  <Nav.Link href="/contact" style={{color: 'white' }}>Contact Me</Nav.Link>
                  <Nav.Link href="/terms" style={{color: 'white' }}>Terms and Conditions</Nav.Link>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
    </div>
  );
}

export default Navigation;

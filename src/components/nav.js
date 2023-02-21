import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import logo from "../assets/smallStrength.png";
import "../styles/home.css";

function Navigation() {
  return (
    <Navbar sticky="top" variant="light" style={{ backgroundColor: '#0CB5CF' }}>
      <div className="nav-surround">
        <Navbar.Brand href="/home">
          <img src={logo} />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/home">Home</Nav.Link>
            <NavDropdown title="Services" id="basic-nav-dropdown">
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
              {/* <NavDropdown.Item href="/services/indian_head_massage">
                Indian Head Massage
              </NavDropdown.Item> */}
            </NavDropdown>
            <Nav.Link href="/about">About</Nav.Link>
            <Nav.Link href="/testimonials">Testimonials</Nav.Link>
            <Nav.Link href="/contact">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </div>
    </Navbar>
  );
}

export default Navigation;

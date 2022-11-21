import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import logo from '../assets/smallStrength.png'

function Navigation() {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="/home"><img src={logo}/></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/home">Home</Nav.Link>
            <NavDropdown title="Services" id="basic-nav-dropdown">
              <NavDropdown.Item href="services/craniosacral_therapy">
                Craniosacral Therapy
              </NavDropdown.Item>
              <NavDropdown.Item href="#services/somato_emotional_release">
                Somato Emotional Release
              </NavDropdown.Item>
              <NavDropdown.Item href="#services/life_coaching">
                Life Coaching
              </NavDropdown.Item>
              <NavDropdown.Item href="#services/nutritional_therap">
                Nutritional Therapy
              </NavDropdown.Item>
              <NavDropdown.Item href="#services/meditation">
                Meditation
              </NavDropdown.Item>
              <NavDropdown.Item href="#services/reiki_seichem">
                Reiki and Seichem
              </NavDropdown.Item>
              <NavDropdown.Item href="#services/massage_therapy">
                Massage Therapy
              </NavDropdown.Item>
              <NavDropdown.Item href="#services/indian_head_massage">
                Indian Head Massage
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="/about">About</Nav.Link>
            <Nav.Link href="/testimonials">Testimonials</Nav.Link>
            <Nav.Link href="/contant">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigation;

 
import { Navbar, Nav, Container } from "react-bootstrap"; 
import CartWidget from "./CartWidget";

const NavbarReelFun = ({ itemCount }) => {
  return (
    <Navbar className="bg-body-tertiary" fixed="top" bg="gray" variant="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home">
          <img
              src="/img/brandLogo2.jpg"
              width="40"
              height="40"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            />ReelFun
            </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#reeles">Reeles</Nav.Link>
            <Nav.Link href="#canas">Cañas</Nav.Link>
            <Nav.Link href="#accesorios">Accesorios</Nav.Link>
          </Nav>
          <CartWidget itemCount={itemCount} />
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarReelFun;
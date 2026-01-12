 
import {  Container,   } from "react-bootstrap"; 
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import CartWidget from "./CartWidget/CartWidget";
import { NavLink } from 'react-router-dom';
import NavBarBrand from './NavBarBrand';
import './NavBar.css'; 
import {   categoriasNavConfig    } from '../../services/Productos/TipoProducto';

/* const NavbarReelFun = () => {
  return (
    <Container>
      <Navbar  bg="light" data-bs-theme="light" fixed="top" expand="lg"> 
            <NavBarBrand/> 
            <Nav className="me-auto"> 
              <Nav.Link>
                <NavLink className="nav-link-clean" to="/categoria/reels">Reeles22</NavLink>
              </Nav.Link>
              <Nav.Link >
                <NavLink className="nav-link-clean" to="/categoria/canas">Cañas</NavLink>
              </Nav.Link>
              <Nav.Link>
                <NavLink className="nav-link-clean" to="/categoria/accesorios">Accesorios</NavLink> 
              </Nav.Link>
            </Nav>  
            <CartWidget/>           
      </Navbar>
    </Container> 
  );
}; */
const NavbarReelFun = () => {
  return ( 
      <Navbar bg="light" fixed="top" expand="lg">
        <Container fluid>  
          <NavBarBrand />
          <Navbar.Toggle aria-controls="main-navbar" />
          <Navbar.Collapse id="main-navbar">
            <Nav className="me-auto">
              {categoriasNavConfig.map(({ key, label, path }) => (
                <Nav.Link as="span" key={key}>
                  <NavLink
                    to={path}
                    className={({ isActive }) =>
                                `nav-link-clean ${isActive ? "active" : ""}`
                                }>
                    {label}
                  </NavLink>
                </Nav.Link>
              ))}
            </Nav> 
            <CartWidget />
          </Navbar.Collapse>
         </Container>
      </Navbar> 
  );
};


export default NavbarReelFun;
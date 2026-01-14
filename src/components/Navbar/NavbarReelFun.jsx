 
import {  Container,   } from "react-bootstrap"; 
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import CartWidget from "./CartWidget/CartWidget";
import { NavLink } from 'react-router-dom';
import NavBarBrand from './NavBarBrand';
import './NavBar.css'; 
import {   categoriasNavConfig    } from '../../services/Productos/ClasificacionProducto';
 
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
 
import {  Container,   } from "react-bootstrap"; 
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import CartWidget from "./CartWidget/CartWidget";
import { NavLink } from 'react-router-dom';
import NavBarBrand from './NavBarBrand';
import './NavBar.css';

const NavbarReelFun = ({ itemCount }) => {
  return (
    <Container>
      <Navbar  bg="light" data-bs-theme="light" fixed="top" expand="lg"> 
            <NavBarBrand/> 
            <Nav className="me-auto"> 
              <Nav.Link>
                <NavLink className="nav-link-clean" to="/categoria/reels">Reeles</NavLink>
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
};

export default NavbarReelFun;
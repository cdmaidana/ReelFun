import React from 'react'
import { NavLink } from 'react-router-dom'
import Navbar from 'react-bootstrap/Navbar';

const NavBarBrand = () => {
  return (
    <NavLink to="/categoria/home" className="nav-link-clean" >
      <Navbar.Brand >
        <img
          src="/img/brandLogo2.jpg"
          width="40"
          height="40"
          className="d-inline-block align-top"
          alt="React Bootstrap logo"
        />ReelFun 
      </Navbar.Brand>
    </NavLink>
  )
}

export default NavBarBrand
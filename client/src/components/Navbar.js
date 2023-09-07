import React, { useState } from 'react';
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarToggler,
  MDBIcon,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBBtn,
  MDBDropdown,
  MDBDropdownToggle,
  MDBDropdownMenu,
  MDBDropdownItem,
  MDBCollapse,
} from 'mdb-react-ui-kit';

import logo from '../assets/Opulent-logo.png';

export default function Navbar({ setDisplayProducts }) {
  const [showBasic, setShowBasic] = useState(false);

  const handleProductsClick = () => {
    setDisplayProducts(true);
  };

  return (
    <MDBNavbar expand="lg" light bgColor="light">
      <MDBContainer fluid>
        <MDBNavbarBrand href="#">
          <img src={logo} alt="Logo" height="30" />
        </MDBNavbarBrand>

        <MDBNavbarToggler
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
          onClick={() => setShowBasic(!showBasic)}
        >
          <MDBIcon icon="bars" fas />
        </MDBNavbarToggler>

        <MDBCollapse navbar show={showBasic}>
          <MDBNavbarNav className="mr-auto mb-2 mb-lg-0">
            <MDBNavbarItem>
              <MDBNavbarLink active aria-current="page" href="#">
                Home
              </MDBNavbarLink>
            </MDBNavbarItem>
            <MDBNavbarItem>
              <MDBNavbarLink href="#">About Us</MDBNavbarLink>
            </MDBNavbarItem>
            <MDBNavbarItem>
              <MDBNavbarLink onClick={handleProductsClick}>Products</MDBNavbarLink>
            </MDBNavbarItem>
            <MDBNavbarItem>
              <MDBNavbarLink href="#">Contact</MDBNavbarLink>
            </MDBNavbarItem>
          </MDBNavbarNav>

          <form className="d-flex input-group w-auto">{/* ... Search input and button ... */}</form>

          <MDBIcon icon="shopping-cart" size="lg" className="mx-3" />
        </MDBCollapse>
      </MDBContainer>
    </MDBNavbar>
  );
}

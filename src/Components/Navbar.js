import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';




function NavBar() {

  const [colorChange, setColorchange] = useState(false);
  const changeNavbarColor = () => {
    if (window.scrollY >= 80) {
      setColorchange(true);
    }
    else {
      setColorchange(false);
    }
  };
  window.addEventListener('scroll', changeNavbarColor);

  return (
    <Navbar className={colorChange ? 'navbar colorChange' : 'navbar'} expand="lg" fixed='top' >
      <Container   >
        <Navbar.Brand href="#home">
          <img
            alt=""
            src="./assets/logo/7ac1037e455cb7559800318b98569c40.png"
            width="70"
            height="70"
            flex-shrink="0"
            className="d-inline-block align-top"
          />{' '}
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="ms-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll>
            <Nav.Link className='menu-itm1' href="#action1">Home</Nav.Link>
            <NavDropdown className='menu-itm' title="Courses" id="navbarScrollingDropdown" >
              <NavDropdown.Item href="#action3">Courses</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Something else here
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown className='menu-itm' title="Mock Tests" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Mock Tests</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Something else here
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link className='menu-itm' href="#action">
              Pricing
            </Nav.Link>
          </Nav>
          <button type='button' className='nav-btn' >Sign in / sign up</button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}



export default NavBar;
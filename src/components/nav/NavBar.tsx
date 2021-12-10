import React from 'react';
import {Navbar,
Container,
Nav
} from 'react-bootstrap';
import Image from 'react-bootstrap/Image';
import Logo from './../../logo/nora_logo.jpg';
import './Navbar.css';

function Navigation() {
  return  (
  <>
    <Navbar bg="primary" expand="lg" sticky="top">
      <Container>
        <Navbar.Brand href="/">
          <Image className='logo'  src={Logo} roundedCircle />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav variant="pills" className= "m-auto">
            <Nav.Link href="explore">Explore</Nav.Link>
            <Nav.Link href="profile">Your Profile</Nav.Link>
            <Nav.Link href="signup">Signup</Nav.Link>
            <Nav.Link href="signin">Signin</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  </>
  );
};

export default Navigation;

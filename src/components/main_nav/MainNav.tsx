import {Navbar,
Container,
Nav
} from 'react-bootstrap';
import Image from 'react-bootstrap/Image';
import Logo from './../../logo/nora_logo.jpg';

function MainNav() {
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
            <Nav.Link href="user">I'm a user</Nav.Link>
            <Nav.Link href="business">I'm running a business</Nav.Link>
              </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  </>
  );
}

export default MainNav;

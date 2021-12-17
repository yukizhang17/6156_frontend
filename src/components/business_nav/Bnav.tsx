import {Navbar,
Container,
Nav
} from 'react-bootstrap';
import Image from 'react-bootstrap/Image';
import Logo from './../../logo/nora_logo.jpg';
import './Bnav.css';

function Bnavigation() {
  return  (
  <>
    <Navbar bg="primary" expand="lg" sticky="top">
      <Container>
        <Navbar.Brand href='/'>
          <Image className='logo'  src={Logo} roundedCircle />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav variant="pills" className= "m-auto">
            <Nav.Link href="/business/b_user">Business Profile</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  </>
  );
};

export default Bnavigation;


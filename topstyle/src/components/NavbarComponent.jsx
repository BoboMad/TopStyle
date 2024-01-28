import OffcanvasLogin from './OffcanvasLogin';
import Navbar from 'react-bootstrap/Navbar';
import {Row, Col, Container, Nav} from 'react-bootstrap'



const NavbarComponent = () => {
  return (
    <Navbar>
      <Container>
        <Col xs={2}>
          <Navbar.Brand href="#home">TopStyle</Navbar.Brand>
        </Col>
        <Col>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#home">Products</Nav.Link>
          </Nav>
        </Col>
      </Container>

      <Container id='login'>
          <Col className='text-end'>
            <OffcanvasLogin/>
          </Col>
      </Container>
    </Navbar>
  )
}

export default NavbarComponent;
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import { CartWidget } from './CartWidget';

export const NavBar = () => {
  return (
    <Navbar bg="primary" data-bs-theme="dark">
      <Container>
        <Navbar.Brand href="#home">Tres Tartas</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="#home">Tortas</Nav.Link>
          <Nav.Link href="#features">Desayunos</Nav.Link>
          <Nav.Link href="#pricing">Recetas</Nav.Link>
        </Nav>
        <CartWidget />
      </Container>
    </Navbar>
  );
};
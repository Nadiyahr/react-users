import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const NavBar: React.FC = () => {
  return (
    <Navbar bg='dark' variant='dark' className='mb-2'>
      <Container>
        <Navbar.Brand as={Link} to='/'>
          Users
        </Navbar.Brand>
        <Nav className='me-auto'>
          <Navbar.Brand as={Link} to='/posts'>
            Posts
          </Navbar.Brand>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default NavBar;

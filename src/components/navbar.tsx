import { Container, Nav, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const NavBar: React.FC = () => {

  return (
    <Navbar bg="dark" variant="dark" className="mb-2">
        <Container >
          <Navbar.Brand as={Link} to="/">Users</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/posts">Posts</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link as={Link} to="/post">Post</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
  )
}

export default NavBar

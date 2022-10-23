import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";

function NavBar({ user }) {
  return (
    <Navbar className="navigation-bar" expand="md" bg="light" variant="light">
      <Container>
        <Navbar.Brand href="/">Reflecta</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          {user && <Navbar.Text>Signed in as: {user}</Navbar.Text>}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;

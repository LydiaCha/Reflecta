import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/esm/Button";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { useNavigate } from "react-router-dom";

function NavBar({ user }) {
  const navigate = useNavigate();

  const onLogOutClick = () => {
    console.log("ah");
    localStorage.removeItem("user");
    navigate("/");
    window.location.reload();
  };

  return (
    <Navbar className="navigation-bar" expand="md" bg="light" variant="light">
      <Container>
        <Navbar.Brand href="/">Reflecta</Navbar.Brand>
        {user && (
          <>
            <Navbar.Toggle />
            <Navbar.Collapse className="justify-content-end">
              <Nav className="menu">
                <Navbar.Text>
                  Signed in as: <b>{user}</b>
                </Navbar.Text>
                <Nav.Item onClick={() => onLogOutClick()}>
                  <Button variant="secondary">Log out</Button>
                </Nav.Item>
              </Nav>
            </Navbar.Collapse>
          </>
        )}
      </Container>
    </Navbar>
  );
}

export default NavBar;

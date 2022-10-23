import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";

const HomePage = ({ user }) => {
  return (
    <Container fluid className="home-page">
      <h1 className="home-page__title">
        Welcome back
        <span style={{ color: "#0B5345" }}> {user.userName}</span>
      </h1>
      <p>Let's get started</p>
      <Container className="home-page__menu">
        <Container>
          <Link to="/reflection">
            <Card>
              <Card.Body>Start today's reflection</Card.Body>
            </Card>
          </Link>
        </Container>
        <Container>
          <Link to="/history">
            <Card>
              <Card.Body>Reflection history</Card.Body>
            </Card>
          </Link>
        </Container>
        <Container>
          <Card>
            <Card.Body>My Account</Card.Body>
          </Card>
        </Container>
        <Container>
          <Card>
            <Card.Body>Settings</Card.Body>
          </Card>
        </Container>
      </Container>
    </Container>
  );
};

export default HomePage;

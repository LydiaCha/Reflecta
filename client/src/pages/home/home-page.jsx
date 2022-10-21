import Container from "react-bootstrap/Container";

const HomePage = ({ user }) => {
  return (
    <Container fluid className="home-page">
      <h1 className="home-page__title">Welcome back {user.userName}</h1>
    </Container>
  );
};

export default HomePage;

import Container from "react-bootstrap/Container";
import LoginForm from "../../components/login-form/login-form";

const LoginPage = ({ setLoginUser }) => {
  return (
    <Container fluid className="login-page">
      <h1 className="login-page__title">Reflecta</h1>
      <LoginForm setLoginUser={setLoginUser} />
    </Container>
  );
};

export default LoginPage;

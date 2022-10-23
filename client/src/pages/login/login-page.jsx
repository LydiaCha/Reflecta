import Container from "react-bootstrap/Container";
import LoginForm from "../../components/login-form/login-form";

const LoginPage = ({ setLoginUser }) => {
  return (
    <Container fluid className="login-page">
      <LoginForm setLoginUser={setLoginUser} />
      <a href="/register">Don't have an account? Register here</a>
    </Container>
  );
};

export default LoginPage;

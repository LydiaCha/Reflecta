import Container from "react-bootstrap/Container";
import RegisterForm from "../../components/register-form/register-form";

const RegisterPage = ({ setLoginUser }) => {
  return (
    <Container fluid className="register-page">
      <h1 className="register-page__title">Register to Reflecta</h1>
      <RegisterForm />
    </Container>
  );
};

export default RegisterPage;

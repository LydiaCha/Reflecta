import { useEffect } from "react";
import Container from "react-bootstrap/Container";
import RegisterForm from "../../components/register-form/register-form";

const RegisterPage = ({ setCurrentPage }) => {
  useEffect(() => {
    setCurrentPage("REGISTER");
  });
  return (
    <Container fluid className="register-page">
      <h1 className="register-page__title">Register to Reflecta</h1>
      <RegisterForm />
      <a href="/login">Already have an account? Log in here</a>
    </Container>
  );
};

export default RegisterPage;

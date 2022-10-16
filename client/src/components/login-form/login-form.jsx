import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

const LoginForm = ({ setLoginUser }) => {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    userName: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };

  const login = (e) => {
    e.preventDefault();
    axios.post("http://localhost:5000/login", user).then((res) => {
      console.log(res);
      alert(res.data.message);
      setLoginUser(res.data.user);
      navigate("/ah");
    });
  };

  return (
    <Container className="login-form">
      <Form>
        <Form.Group className="mb-3">
          <Form.Label>Username</Form.Label>
          <Form.Control
            type="input"
            name="userName"
            placeholder="Username"
            value={user.userName}
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            name="password"
            placeholder="Password"
            value={user.password}
            onChange={handleChange}
          />
        </Form.Group>
        <Button variant="primary" type="submit" onClick={login}>
          Submit
        </Button>
      </Form>
    </Container>
  );
};

export default LoginForm;

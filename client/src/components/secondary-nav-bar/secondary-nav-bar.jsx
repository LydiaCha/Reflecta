import React from "react";
import { useNavigate } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { BsArrowLeft } from "react-icons/bs";

const SecondaryNavBar = ({ currentPage }) => {
  const navigate = useNavigate();

  const shouldShowBack = ["HOME", "LOG IN", "REGISTER"].includes(currentPage)
    ? false
    : true;

  return (
    <Navbar className="secondary-nav-bar" sticky="top">
      <Container>
        {shouldShowBack && (
          <Nav.Item>
            <BsArrowLeft onClick={() => navigate(-1)} />
          </Nav.Item>
        )}
        <Nav.Item className="title">{currentPage}</Nav.Item>
      </Container>
    </Navbar>
  );
};

export default SecondaryNavBar;

import axios from "axios";

import { useEffect } from "react";

import Container from "react-bootstrap/Container";
import ChatBot from "react-simple-chatbot";

import { steps } from "./reflection-inputs";

const ReflectionPage = ({ user, setCurrentPage }) => {
  useEffect(() => {
    setCurrentPage("REFLECTION");
  });

  const handleEnd = ({ renderedSteps }) => {
    const timeStamp = new Date(Date.now());
    axios
      .post("http://localhost:5000/set-reflection", {
        user,
        renderedSteps,
        time: timeStamp.toLocaleString("en-GB"),
      })
      .then((res) => {});
  };

  return (
    <Container fluid className="reflection-page">
      <ChatBot
        steps={steps}
        botDelay={500}
        userDelay={100}
        recognitionEnable={true}
        hideUserAvatar
        handleEnd={handleEnd}
      />
    </Container>
  );
};

export default ReflectionPage;

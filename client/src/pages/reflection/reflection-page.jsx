import axios from "axios";

import Container from "react-bootstrap/Container";
import ChatBot from "react-simple-chatbot";

import { steps } from "./reflection-inputs";

const ReflectionPage = ({ user }) => {
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
      <h1>Your reflection</h1>
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

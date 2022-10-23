import Container from "react-bootstrap/Container";
import ChatBot from "react-simple-chatbot";

import { steps } from "./reflection-inputs";

const ReflectionPage = () => {
  const handleEnd = ({ renderedSteps }) => {
    console.log(renderedSteps);
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

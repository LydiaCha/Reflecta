import { useEffect } from "react";
import { useState } from "react";

import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";

const HistoryPage = ({ reflections }) => {
  const [reflection, setReflection] = useState();

  useEffect(() => {
    setReflection(reflections[0]);
  }, [reflections]);

  const onSelect = (event) => {
    const time = event.target.value;
    const currentReflection = reflections.find(
      (reflection) => reflection.time === time
    );
    setReflection(currentReflection);
  };

  return (
    <Container fluid className="history-page">
      <Form.Group as={Row} className="md-2">
        <Col md={{ span: 4 }}>
          <>
            <Form.Label>Disabled select menu</Form.Label>
            <Form.Select onChange={(e) => onSelect(e)}>
              {reflections.map((reflection, i) => (
                <option key={i}>{reflection.time}</option>
              ))}
            </Form.Select>
          </>
        </Col>
      </Form.Group>
    </Container>
  );
};

export default HistoryPage;

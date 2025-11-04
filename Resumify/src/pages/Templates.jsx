import TemplateCard from "../components/TemplateCard";
import { Container, Button, Row, Col } from "react-bootstrap";

function Template() {
  return (
    <Container className="hero text-center my-5">
      <h2 className="mt-4 mb-4 fw-bold">Choose a Template</h2>

      <Row className="g-4">
        <Col md={4}>
          <TemplateCard
            title="Classic Professional"
            img="src/assets/template1.jpeg"
          />
        </Col>
        <Col md={4}>
          <TemplateCard
            title="Modern Minimalist"
            img="src/assets/template2.jpeg"
          />
        </Col>
        <Col md={4}>
          <TemplateCard
            title="Creative Visual"
            img="src/assets/template3.jpeg"
          />
        </Col>
      </Row>

      <Row className="g-4 mt-4">
        <Col md={4}>
          <TemplateCard
            title="ATS-Friendly Simple"
            img="src/assets/template4.jpeg"
          />
        </Col>
        <Col md={4}>
          <TemplateCard
            title="Executive / Senior"
            img="src/assets/template5.jpeg"
          />
        </Col>
        <Col md={4}>
          <TemplateCard
            title="Student / Entry-Level"
            img="src/assets/template6.jpeg"
          />
        </Col>
      </Row>
    </Container>
  );
}

export default Template;

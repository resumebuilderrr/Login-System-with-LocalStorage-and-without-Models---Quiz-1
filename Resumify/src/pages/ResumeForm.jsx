import { Form, Button, Row, Col } from "react-bootstrap";
import "../App.css";

function ResumeForm() {
  return (
    <div className="resume-form">
      <h2 className="text-center">Build Your Resume</h2>
      <Form>
        <h4>Basic Information</h4>
        <Row>
          <Col>
            <Form.Control placeholder="Full Name" />
          </Col>
          <Col>
            <Form.Control placeholder="Email" />
          </Col>
        </Row>
        <Row className="mt-2">
          <Col>
            <Form.Control placeholder="Phone No" />
          </Col>
          <Col>
            <Form.Control placeholder="Location" />
          </Col>
        </Row>

        <h4>Work Experience</h4>
        <Row>
          <Col>
            <Form.Control placeholder="Job Title" />
          </Col>
          <Col>
            <Form.Control placeholder="Company Name" />
          </Col>
        </Row>
        <Row className="mt-2">
          <Col>
            <Form.Control placeholder="Location" />
          </Col>
          <Col>
            <Form.Control placeholder="Achievements" />
          </Col>
        </Row>

        <h4>Education</h4>
        <Row>
          <Col>
            <Form.Control placeholder="Degree / Certificate" />
          </Col>
          <Col>
            <Form.Control placeholder="Location" />
          </Col>
        </Row>
        <Row className="mt-2">
          <Col>
            <Form.Control placeholder="Institute Name" />
          </Col>
          <Col>
            <Form.Control placeholder="Graduation Year" />
          </Col>
        </Row>

        <h4>Skills</h4>
        <Row>
          <Col>
            <Form.Control placeholder="Technical Skills" />
          </Col>
          <Col>
            <Form.Control placeholder="Soft Skills" />
          </Col>
        </Row>

        <h4>Projects</h4>
        <Row>
          <Col>
            <Form.Control placeholder="Project Title" />
          </Col>
          <Col>
            <Form.Control placeholder="Project Description" />
          </Col>
        </Row>
        <Row className="mt-2">
          <Col>
            <Form.Control placeholder="Tools/Technologies" />
          </Col>
          <Col>
            <Form.Control placeholder="Link (GitHub/Live)" />
          </Col>
        </Row>

        <Button className="mt-4 w-100 custom-btn" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
}
export default ResumeForm;

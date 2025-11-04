import { Card, Button } from "react-bootstrap";

function TemplateCard({ title, img }) {
  return (
    <Card className="template-card">
      <Card.Img variant="top" src={img} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Button variant="primary" href="/resumeform" className=" custom-btn">
          Use Template
        </Button>
      </Card.Body>
    </Card>
  );
}
export default TemplateCard;

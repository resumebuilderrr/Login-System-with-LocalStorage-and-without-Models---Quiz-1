import { Form, Button } from "react-bootstrap";

function Review() {
  return (
    <div className="form-container">
      <h2>Leave a Review</h2>
      <Form>
        <Form.Group className="mb-3">
          <Form.Label>Email:</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Review:</Form.Label>
          <Form.Control
            as="textarea"
            rows={4}
            placeholder="Write your review here..."
          />
        </Form.Group>

        <Button variant="primary" type="submit" className="w-100 custom-btn">
          Submit Review
        </Button>
      </Form>
    </div>
  );
}

export default Review;

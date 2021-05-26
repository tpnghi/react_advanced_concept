import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import withPerimeter from "./withPerimeter";

class Rectangle extends React.Component {
  render() {
    const { data, handleSubmit, handleChange } = this.props;
    const { length, width, answer } = data;
    return (
      <Container>
        <Form onSubmit={handleSubmit}>
          <Form.Group>
            <Form.Label>Length and width of a rectangle</Form.Label>
            <Row>
              <Col>
                <Form.Control
                  value={length}
                  name="length"
                  placeholder="length"
                  type="number"
                  onChange={handleChange}
                />
              </Col>
              <Col>
                <Form.Control
                  value={width}
                  name="width"
                  placeholder="width"
                  type="number"
                  onChange={handleChange}
                />
              </Col>
            </Row>
          </Form.Group>
          <Row>
            <Col>
              <Button variant="primary" type="submit" block>
                Submit
              </Button>
              <Form.Control
                plaintext
                readOnly
                value={`Perimeter of Rectangle: ${answer}`}
              />
            </Col>
          </Row>
        </Form>
      </Container>
    );
  }
}

export default Rectangle;

// export default withPerimeter(
//   Rectangle,
//   ({ length, width }) => 2 * (Number(length) + Number(width))
// );

import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import withPerimeter from "./withPerimeter";

class Triangle extends React.Component {
  render() {
    const { data, answer, handleSubmit, handleChange } = this.props;
    const { a, b, c } = data;
    return (
      <Container>
        <Form onSubmit={handleSubmit}>
          <Form.Group>
            <Form.Label>Side lengths of a triangle</Form.Label>
            <Row>
              <Col>
                <Form.Control
                  value={a}
                  type="number"
                  name="a"
                  onChange={handleChange}
                />
              </Col>
              <Col>
                <Form.Control
                  value={b}
                  type="number"
                  name="b"
                  onChange={handleChange}
                />
              </Col>
              <Col>
                <Form.Control
                  value={c}
                  type="number"
                  name="c"
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
                value={`Perimeter of Triangle: ${answer}`}
              />
            </Col>
          </Row>
        </Form>
      </Container>
    );
  }
}

export default withPerimeter(
  Triangle,
  { a: 0, b: 0, c: 0 },
  ({ a, b, c }) => Number(a) + Number(b) + Number(c)
);

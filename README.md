# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Hight Order Component

Using Hight Order Component to make `Triangle`.

``` javascript
import React from "react";

function withPerimeter(GeometryComponent, input, PerimeterCalculator) {
  return class extends React.Component {
    constructor(props) {
      super(props);
      this.state = { data: input, answer: null };
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
      const value = event.target.value;
      this.setState({
        ...this.state,
        data: { ...this.state.data, [event.target.name]: value },
      });
    }

    handleSubmit(event) {
      event.preventDefault();
      const answer = PerimeterCalculator(this.props.data);
      this.setState({ ...this.state, answer });
    }
    render() {
      console.log(this.props);
      return (
        <GeometryComponent
          data={this.state.data}
          answer={this.state.answer}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
          {...this.props}
        />
      );
    }
  };
}

export default withPerimeter;


```

## Render Pro

Using Render props to make `Rectangle`.

``` javascript

import React from "react";

class Geometry extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: props.input,
      answer: 0,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(event) {
    const value = event.target.value;
    this.setState({
      ...this.state,
      data: { ...this.state.data, [event.target.name]: value },
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    const answer = this.props.calculate(this.state.data);
    this.setState({ ...this.state, answer });
  }

  render() {
    return (
      <div>
        {this.props.render(this.state, this.handleChange, this.handleSubmit)}
      </div>
    );
  }
}

export default Geometry;

```

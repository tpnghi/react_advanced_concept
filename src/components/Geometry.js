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
    const answer = this.props.calculate(this.props.data);
    this.setState({ ...this.state, answer });
  }

  render() {
    return (
      <div>
        {" "}
        {this.props.render(
          this.state.data,
          this.handleChange,
          this.handleSubmit
        )}
      </div>
    );
  }
}

export default Geometry;

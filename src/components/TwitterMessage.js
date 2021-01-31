import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {};
  }

  render() {
    console.log(this.props.maxChars)
    console.log(this.state)
    return (
      <div>
        <strong>Your message:</strong>
        <input value={this.state.message} onChange={(e) => this.setState({message: e.target.value})} type="text" name="message" id="message" />
        <p>{this.state.message ? this.props.maxChars-this.state.message.length: 280}</p>
      </div>
    );
  }
}

export default TwitterMessage;

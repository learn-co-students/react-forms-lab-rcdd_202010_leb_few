import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();
    this.state = {
      message:""
    };
  }
  
  handleChange=(event)=>{
    this.setState({
      message:event.target.value
    })
  }

  render() {
     let charNb = this.props.maxChars - this.state.message.length;
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" value={this.state.message} onChange={this.handleChange} />
         <span> {charNb} </span>
      </div>
    );
  }
}

export default TwitterMessage;


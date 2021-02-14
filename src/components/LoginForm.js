import React from "react";

class LoginForm extends React.Component {
  constructor() {
    super();

     this.state = {
      username: '',
      password: ''
    };
  }


  handleChangeUser = (e) => {
      this.setState({
      [e.target.name]: e.target.value
    })

  };

    handleChangePass = (e) => {
    this.setState({
     [e.target.name]: e.target.value
    })

    };


handleSubmit=(e)=>{
  e.preventDefault()
  if(this.state.username!="" && this.state.password!="")
     this.props.handleLogin(this.state)
  }

  render() {
    return (
     <form onSubmit={this.handleSubmit}>
        <div>
          <label>
            Username
              <input id="username" name="username" type="text" onChange={this.handleChangeUser} value={this.state.username}/>
          </label>
        </div>
        <div>
          <label>
            Password
             <input id="password" name="password" type="password" onChange={this.handleChangePass} value={this.state.password}/>
          </label>
        </div>
        <div>
          <button type="submit">Log in</button>
        </div>
      </form>
    );
  }
}

export default LoginForm;

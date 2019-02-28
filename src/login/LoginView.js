import React, { Component } from "react";
import "./loginStyles.css";
import FormGroup from "@material-ui/core/FormGroup";
import TextField from "@material-ui/core/TextField";
import Button from '@material-ui/core/Button';

class LoginView extends Component {
  state={
    username: '',
    password: ''
  }

  handleChange = (e) => {
    this.setState({
      ...this.state,
      [e.target.name]: e.target.value
    })
  }
  render() {
    return (
      <form className="formContainer">
        <TextField
          id="outlined-name"
          label="Username"
          name='username'
          className='formText'
          value={this.state.username}
          onChange={this.handleChange}
          margin="normal"
          variant="outlined"
        />
        <TextField
          id="outlined-name"
          label="Password"
          name='password'
          className='formText'
          value={this.state.password}
          onChange={this.handleChange}
          margin="normal"
          variant="outlined"
        />
        <Button variant="outlined" color="inherit" className=''>
        Inherit
      </Button>
      </form>
    );
  }
}

export default LoginView;

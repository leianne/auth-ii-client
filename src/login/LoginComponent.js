import React, { Component } from 'react';
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

class LoginComponent extends Component {
    render(){
        return(
            <form className="formContainer">
            <TextField
              id="outlined-name"
              label="Username"
              name="username"
              className="formText"
              value={this.props.user.username}
              onChange={this.props.handleChange}
              margin="normal"
              variant="outlined"
            />
            <TextField
              id="outlined-name"
              label="Password"
              name="password"
              className="formText"
              value={this.props.user.password}
              onChange={this.props.handleChange}
              margin="normal"
              variant="outlined"
            />
            
            <Button onClick={(e) => this.props.handleSubmit(e)} variant="outlined" color="inherit" id="formBtn">
              {this.props.registering ? 'Register' : 'Login'}
            </Button>
            
          </form>
        )
    }
}

export default LoginComponent;
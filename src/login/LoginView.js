import React, { Component } from "react";
import { connect } from 'react-redux';
import LoginComponent from './LoginComponent';
import "./loginStyles.css";

class LoginView extends Component {
  state = {
    username: "",
    password: "",
    registering: false
  };

  handleChanges = e => {
    this.setState({
      ...this.state,
      [e.target.name]: e.target.value
    });
  }
  
  handleSubmit = e => {
    e.preventDefault()
    if(this.state.registering){
      this.props.registerUser()
    } else {
      this.props.loginUser()
    }
  }

  render() {
    return (
      <LoginComponent user={this.state} handleSubmit={this.handleSubmit} registering={this.state.registering} handleChanges={this.handleChanges}/>
    );
  }
}

const mapStateToProps = state => {
  
}
export default connect(mapStateToProps, {loginUser, registerUser})(LoginView);

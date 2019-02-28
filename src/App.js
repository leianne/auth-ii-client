import React, { Component } from 'react';
import { Route, NavLink } from 'react-router-dom';
import UserView from './views/UserView';
import LoginView from './views/LoginView';
import './App.css';

class App extends Component {
  render() {
    return (
      <>
        <header>
          <NavLink to='/users'>Users</NavLink>
          <NavLink to='/login'>Login</NavLink>
          <NavLink to='register'>Register</NavLink>
        </header>
        <Route to='/users' component={UserView} />
        <Route to='/users' component={LoginView} />
      </>
    );
  }
}

export default App;

import React from 'react';
import {connect} from 'react-redux';
import {login, register} from '../actions/actions';
import styled from "styled-components";

const S = {}

class Login extends React.Component {
    state = {
      credentials: {
        email: '',
        password: '',
        username: '',
        name: ''
      }
    }
  
    login = e => {
      let email = this.state.credentials.email;
      let password = this.state.credentials.password;
      e.preventDefault();
      // localStorage.setItem("token", "abc")
      this.props.login({ email, password })
        .then(() => {
          this.props.history.push('/');
        })
        .catch((err) => {
        })
    }

    register = e => {
      console.log("REGISTER TRIGGERED")
      e.preventDefault();
      this.props.register(this.state.credentials)
        .then(() => {

        })
    }
  
    handleChange = e => {
      this.setState({
        credentials: {
          ...this.state.credentials,
          [e.target.name]: e.target.value,
        }
      });
    }
  

    render() {
        let message = "Login/Register"
        if(this.props.registering){
            message = "...registering"
        } else if (this.props.loggingIn) {
            message = "...logging in"
        } else if (this.props.registered) {
            message = "Registered!"
        }
        return (
            <div>
            <h1>{message}</h1>
            <form onSubmit={this.login}>
                <input
                    type="text"
                    name="email"
                    placeholder = "email"
                    value={this.state.credentials.email}
                    onChange={this.handleChange}
                />
                <input
                    type="password"
                    name="password"
                    placeholder = "password"
                    value={this.state.credentials.password}
                    onChange={this.handleChange}
                />
                <input
                    type="text"
                    name="name"
                    placeholder = "name"
                    value={this.state.credentials.name}
                    onChange={this.handleChange}
                />
                <input
                    type="text"
                    name="username"
                    placeholder = "username"
                    value={this.state.credentials.username}
                    onChange={this.handleChange}
                />
                <button className="button upperButton">Log in</button>
                <button className="button" onClick = {this.register}>Register</button>
            </form>
            </div>
        )
    }
}
  function mapStateToProps(state){
    return {
        loggingIn: state.loggingIn,
        registering: state.registering,
        registered: state.registered
    }
}

  export default connect(mapStateToProps, { login, register })(Login);
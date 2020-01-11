import React from 'react';
import {connect} from 'react-redux';
import {login, register} from '../actions/actions';
import styled from "styled-components";

const S = {}

S.Container = styled.div`
  width: calc(100vw - (100vw - 100%));
  min-height: 100vh;
  border: solid black 1px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: black;
  font-family: 'Lora', serif;



`

S.H1 = styled.h1`
  // border: solid black 2px;
  width: 420px;
  font-size: 72px;
  box-sizing: border-box;
  margin: 0px;
  margin-bottom: 8%;
  // margin-right: 200px;
  line-height: 84%;
`

S.Form = styled.form`
  display: flex;
  flex-direction: column;
  background-color: white;
  min-height: 70vh;
  width: 34%;
  padding: 4% 3% 4%;
  box-sizing: border-box;

  div {
    width: 100%;
    // border: solid black 1px;
    display: flex;
    flex-direction: column;

    span {
      font-size: 18px;
      align-self: center;
      margin-top: 14px;
    }
  }

`
S.Label = styled.h3`
  margin: 0px 0px 3% 0px;

`

S.Input = styled.input`
  width: 100%;
  height: 55px;
  border: solid black 1px;
  padding: 0px 1%;
  box-sizing: border-box;
  margin-bottom: 8%;

`

S.GreenButton = styled.button`
  background-color: #1B722E;
  align-self: center;
  width: 55%;
  height: 55px;
  margin-top: 15px;
  border: none;
  color: white;
  font-family: 'Lora', serif;
  font-size: 20px;

`

S.BlackButton = styled(S.GreenButton)`
  background-color: black;
  margin-top: 8px;
`
class Login extends React.Component {
    state = {
      credentials: {
        email: '',
        password: '',
        username: '',
        name: ''
      },
      isSigningUp: false,
    }
  
    login = e => {
      let email = this.state.credentials.email;
      let password = this.state.credentials.password;
      e.preventDefault();
      // localStorage.setItem("token", "abc")
      this.props.login({ email, password })
        .then(() => {
          this.props.history.push('/dashboard');
        })
        .catch((err) => {
        })
    }

    register = e => {
      console.log("REGISTER TRIGGERED")
      e.preventDefault();
      this.props.register(this.state.credentials)
        .then(() => {
          this.isSigningUpSwitch();
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

    isSigningUpSwitch = () => {
      this.setState({
        isSigningUp: !this.state.isSigningUp
      })
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
            <S.Container>
              {/* <h1>{message}</h1> */}
              <S.Form onSubmit={this.login}>
                  <S.H1>MED CABINET</S.H1>
                  <S.Label>EMAIL</S.Label>
                  <S.Input
                      type="text"
                      name="email"
                      // placeholder = "email"
                      value={this.state.credentials.email}
                      onChange={this.handleChange}
                      autoComplete = "off"
                      />
                  <S.Label>PASSWORD</S.Label>
                  <S.Input
                      type="password"
                      name="password"
                      // placeholder = "password"
                      value={this.state.credentials.password}
                      onChange={this.handleChange}
                  />
                  { !this.state.isSigningUp
                    ? (
                      <div>
                        <S.GreenButton className="button upperButton">SIGN IN</S.GreenButton>
                        <span>Don't have an account?</span>
                        <S.BlackButton className="button" onClick = {this.isSigningUpSwitch}>SIGN UP</S.BlackButton>
                      </div>
                    )
                    : (
                      <div>
                        <S.Label>NAME</S.Label>
                        <S.Input
                        type="text"
                        name="name"
                        // placeholder = "name"
                        value={this.state.credentials.name}
                        onChange={this.handleChange}
                        />
                        <S.Label>USERNAME</S.Label>
                        <S.Input
                            type="text"
                            name="username"
                            // placeholder = "username"
                            value={this.state.credentials.username}
                            onChange={this.handleChange}
                        />
                        <S.BlackButton className="button" onClick = {(e) => this.register(e)}>SIGN UP</S.BlackButton>
                      </div>
                    )
                  }
                  {/* <S.GreenButton className="button upperButton">SIGN IN</S.GreenButton>
                  <S.BlackButton className="button" onClick = {this.register}>SIGN UP</S.BlackButton> */}
                  {/* 
                  <S.Label>NAME</S.Label>
                  <S.Input
                  type="text"
                  name="name"
                  placeholder = "name"
                  value={this.state.credentials.name}
                  onChange={this.handleChange}
                  />
                  <S.Label>USERNAME</S.Label>
                  <S.Input
                      type="text"
                      name="username"
                      placeholder = "username"
                      value={this.state.credentials.username}
                      onChange={this.handleChange}
                  /> */}
                  
              </S.Form>
            </S.Container>
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
import React, { Component } from 'react';
import { Link } from 'react-router';

import TextField from 'material-ui/TextField';
import FlatButton from 'material-ui/FlatButton';

import { login, resetPassword } from '../../auth'

const modalStyle = {
  inputStyle: {
    width: '100%'
  },

  btnStyle: {
    labelPosition: 'after',
    backgroundColor: 'tomato',

    textTransform: 'lowercase',
    height: 60,
    width: '100%'
  }
};

function setErrorMsg(error) {
  return {
    loginMessage: error
  }
}


export default class SignIn extends Component {
  state = { loginMessage: null }
  handleSubmit = (e) => {
    e.preventDefault()
    login(this.email.value, this.pw.value)
    console.log("EMAIL: " + this.email.value + "PASS: " + this.pw.value)
      .catch((error) => {
          this.setState(setErrorMsg('Invalid username/password.'))
        })
  }

    resetPassword = () => {
    resetPassword(this.email.value)
      .then(() => this.setState(setErrorMsg(`Password reset email sent to ${this.email.value}.`)))
      .catch((error) => this.setState(setErrorMsg(`Email address not found.`)))
  }

  render() {
    // console.log('signIn: ', this.props.CurrentModal);
    // console.log('signIn prop ', this.props);
    // console.log('from sign in this.closeModal: ', this.props.closeModal);

    return (
      <div className="modalForm">
        <div className="modalContent">
          <span onClick={this.props.closeModal} className="xClose">
            &times;
          </span>

          <div className="welcome">
            <h1>Welcome to Sugr</h1>
          </div>

          <div className="errHandle">
            <span id="error" />
          </div>

          <div className="inputWrapper">
            <form>
              <TextField
                name="email"
                hintText="email"
                floatingLabelText="Email"
                style={modalStyle.inputStyle}
                onChange={ev => {
                  this.props.inputChange(ev.currentTarget.value, 'email');
                }}
                ref={(email) => this.email = email}
              />

              <TextField
                name="password"
                hintText="password"
                floatingLabelText="Password"
                style={modalStyle.inputStyle}
                onChange={ev => {
                  this.props.inputChange(ev.currentTarget.value, 'password');
                }}
                ref={(pw) => this.pw = pw}
              />
            </form>
          </div>

          <FlatButton
            label="Sign In"
            style={modalStyle.btnStyle}
            containerElement={<Link to="/Dashboard" />}
            linkButton={true}
            onSubmit={this.handleSubmit}
          />

          <div className="dividerOr">or</div>

          <FlatButton label="Sign me up" style={modalStyle.btnStyle} />
        </div>
      </div>
    );
  }
}



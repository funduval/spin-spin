import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';


const modalStyle = {
  inputStyle: {
    width: '100%',
  },

  btnStyle: {
  labelPosition: 'after',
  backgroundColor: 'tomato',
  height: 60,
  width: '100%',
  }
};

export default class Form extends Component {
  constructor(props) {
    super(props);
    this.closeSignUp = this.closeSignUp.bind(this);
  }

  closeSignUp = () => {
    // console.log('clicking close in signIn')
    this.props.handleClick("null");
  }

  ClickSignUp = () => {
    this.props.handleClick("SignUp")
  }

  state = {
    fullName:'',
    fullNameErr:'',
    email:'',
    emailErr:'',
    profilePict:'',
    profilePictErr:'',
    password:'',
    passwordError:'',
    confPass:'',
    confPassErr:''
  };

  // change = e => {
  //   this.props.onChange({ [e.target.name]: e.target.value });
  //   this.setState({
  //     [e.target.name]: e.target.value
  //   });
  // };

  // onSubmit = e => {
  //   e.preventDefault();
  //   // this.props.onSubmit(this.state);
  //   this.setState({
  //     firstName: "",
  //     lastName: "",
  //     username: "",
  //     email: "",
  //     password: ""
  //   });
  //   this.props.onChange({
  //     User.firstName: "",
  //     lastName: "",
  //     username: "",
  //     email: "",
  //     password: ""
  //   });
  // };



  render() {
    // console.log('signUp: ',this.props.CurrentModal)

    return (
            <div className="modalForm">
              <div className="modalContent">
                <span
                  onClick = { this.closeSignUp }
                  className = "xClose">&times;</span>
                <div className="welcome">
                    <h1>Join Us!</h1>
                </div>
                <div className="errHandle">
                  <span id="error"></span>
                </div>
                <form>
                  <TextField
                    name="fullName"
                    hintText="Full name"
                    floatingLabelText="Full name"
                    errorText={this.state.fullNameErr}
                    onChange = { (ev) => {this.props.inputChange(ev.currentTarget.value, 'fullName')} }
                    style={ modalStyle.inputStyle }
                  /><br />

                  <TextField
                    name="gender"
                    hintText="Gender"
                    floatingLabelText="Gender"
                    errorText={this.state.genderErr}
                    onChange = { (ev) => {this.props.inputChange(ev.currentTarget.value, 'gender')} }
                    style={ modalStyle.inputStyle }
                  /><br />

                  <TextField
                    name="email"
                    hintText="Email"
                    floatingLabelText="Email"
                    errorText={this.state.emailErr}
                    onChange = { (ev) => {this.props.inputChange(ev.currentTarget.value, 'email')} }
                    style={ modalStyle.inputStyle }
                  /><br />

                  <TextField
                    name="profilePict"
                    hintText="Profile picture link"
                    floatingLabelText="Profile picture"
                    errorText={this.state.profilePictErr}
                    onChange = { (ev) => {this.props.inputChange(ev.currentTarget.value, 'profilePict')} }
                    style={ modalStyle.inputStyle }
                  /><br />

                  <TextField
                    name="password"
                    hintText="Password"
                    floatingLabelText="Password"
                    errorText={this.state.passwordErr}
                    type="password"
                    onChange = { (ev) => {this.props.inputChange(ev.currentTarget.value, 'Password')} }
                    style={ modalStyle.inputStyle }
                  /><br />

                  <TextField
                    name="confPass"
                    hintText="Confirm Password"
                    floatingLabelText="Confirm password"
                    errorText={this.state.confPassErr}
                    type="password"
                    onChange = { (ev) => {this.props.inputChange(ev.currentTarget.value, 'confPass')} }
                    style={ modalStyle.inputStyle }
                  /> <br />

                  <RaisedButton 
                    label="Submit" 
                    onClick = { (e) => this.onSubmit(e) } 
                    primary 
                    style={ modalStyle.btnStyle }
                    />
                </form>
              </div>
            </div>
         );
        }
      };


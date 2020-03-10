import React, { Component } from "react";
import { Link } from "react-router-dom";
import FormInput from "../../components/form-input/form-input";
import CustomButton from "../../components/custom-button/custom-button";

import { auth, signInWithGoogle } from "../../firebase/firebase.util";

import "./SignIn.scss";

class SignIn extends Component {
  state = {
    email: "",
    password: ""
  };
  handleSubmit = async e => {
    e.preventDefault();
    const { email, password } = this.state;
    try {
      await auth.createUserWithEmailAndPassword(email, password);
      this.setState({ email: "", password: "" });
    } catch (error) {
      console.log(error.message);
    }
  };
  handleChnage = e => {
    const { value, name } = e.target;
    this.setState({ [name]: value });
  };
  render() {
    return (
      <React.Fragment>
        <div className="login-form">
          <div className="main-div">
            <div className="panel">
              <h2>User Login</h2>
              <div className="social-login-wrapper">
                <div className="fb-login-btn">
                  <CustomButton classname="IsfbSignIn">Facebook</CustomButton>
                </div>
                <div className="google-login-btn">
                  <CustomButton
                    classname="IsgoogleSignIn"
                    onclick={signInWithGoogle}
                  >
                    Googel
                  </CustomButton>
                </div>
              </div>
              <p>Please enter your email and password</p>
            </div>
            <form
              id="Login"
              onSubmit={this.handleSubmit}
              noValidate
              autoComplete="none"
            >
              <div className="form-group">
                <FormInput
                  className="form-control"
                  type="email"
                  name="email"
                  value={this.state.email}
                  onChange={this.handleChnage}
                  required
                />
              </div>

              <div className="form-group">
                <FormInput
                  className="form-control"
                  type="password"
                  name="password"
                  value={this.state.password}
                  onChange={this.handleChnage}
                  required
                />
              </div>
              <div className="forgot">
                <Link to="forgotPassword">Forgot password?</Link>
              </div>
              <CustomButton type="submit" className="btn btn-primary">
                Login
              </CustomButton>
            </form>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default SignIn;

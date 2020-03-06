import React, { Component } from "react";
import { Link } from "react-router-dom";
import FormInput from "../../components/form-input/form-input";
import CustomButton from "../../components/custom-button/custom-button";
import { auth, createuserProfileDocument } from "../../firebase/firebase.util";

import "./SignUp.scss";

class SignUp extends Component {
  state = {
    displayName: "",
    email: "",
    password: "",
    confirmPassword: ""
  };
  handleSubmit = async e => {
    e.preventDefault();
    const { email, displayName, password, confirmPassword } = this.state;
    if (password !== confirmPassword) {
      alert("Password Didn't Match");
      return;
    }
    try {
      const { user } = await auth.createUserWithEmailAndPassword(
        email,
        password
      );
      await createuserProfileDocument(user, { displayName });
      this.setState({
        displayName: "",
        email: "",
        password: "",
        confirmPassword: ""
      });
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
              <h2>User Registration</h2>
              <p>Please enter required Fields</p>
            </div>
            <form
              id="Register"
              onSubmit={this.handleSubmit}
              noValidate
              autoComplete="none"
            >
              <div className="form-group">
                <FormInput
                  className="form-control"
                  type="displayName"
                  name="displayName"
                  value={this.state.displayName}
                  onChange={this.handleChnage}
                  required
                />
              </div>
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
              <div className="form-group">
                <FormInput
                  className="form-control"
                  type="password"
                  name="confirmPassword"
                  value={this.state.confirmPassword}
                  onChange={this.handleChnage}
                  required
                />
              </div>
              <div className="forgot">
                <p>
                  Already Have an Account? Click
                  <Link to="login">here </Link>to Login
                </p>
              </div>
              <CustomButton type="submit" className="btn btn-primary">
                Register
              </CustomButton>
            </form>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default SignUp;

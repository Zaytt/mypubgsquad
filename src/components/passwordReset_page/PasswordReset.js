import React, { Component } from 'react';
import TextFieldGroup from '../common/TextFieldGroup';

export default class PasswordReset extends Component {
  state = {
    email: '',
    errors: {}
  };

  render() {
    const { errors } = this.state;
    return (
      <div className="login my-5 full-height">
        <div className="container">
          <div className="row">
            <div className="col-10 col-md-8 col-lg-6 m-auto">
              <h1 className="display-4 text-center mb-2">Reset your password</h1>
              <p className="lead text-center mb-4">
                Type in your account's email. You will receive an email that will help you change
                your password.
              </p>
              <form>
                <TextFieldGroup
                  name="email"
                  placeholder="Your email"
                  type="email"
                  value={this.state.email}
                  onChange={this.onChange}
                  error={errors.email}
                />
                <input
                  type="submit"
                  className="btn btn-warning btn-block mt-4 border border-dark"
                  value="Send me the email"
                />
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

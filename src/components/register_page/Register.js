import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Link from 'next/link';
import { registerUser } from '../../redux/actions/authActions';
import TextFieldGroup from '../common/TextFieldGroup';
import Separator from '../common/Separator';

class Register extends Component {
  state = {
    name: '',
    email: '',
    password: '',
    password2: '',
    errors: {}
  };

  componentWillReceiveProps(newProps) {
    if (newProps.errors) this.setState({ errors: newProps.errors });
  }

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();

    const newUser = {
      name: this.state.name,
      email: this.state.email,
      password: this.state.password,
      password2: this.state.password2
    };

    this.props.registerUser(newUser);
  };

  renderErrorMsgs = (errorName, errors) => {
    if (errors[errorName]) {
      return <small className="form-text text-muted text-danger">{errors[errorName]}</small>;
    }
  };

  // componentDidMount() {
  //   if (this.props.auth.isAuthenticated) {
  //     this.props.history.push('/dashboard');
  //   }
  // }

  render() {
    const { errors } = this.state;

    return (
      <div className="register my-3 full-height d-flex">
        <div className="container">
          <div className="row">
            <div className="col-md-8 col-lg-6 m-auto">
              <h1 className="display-4 text-center mb-2">Register</h1>
              <p className="lead text-center mb-4">
                Create your account and get superior stat tracking!
              </p>
              <form noValidate onSubmit={this.onSubmit}>
                <TextFieldGroup
                  name="email"
                  placeholder="Email"
                  type="email"
                  value={this.state.email}
                  onChange={this.onChange}
                  error={errors.email}
                />
                <TextFieldGroup
                  name="password"
                  placeholder="Password"
                  type="password"
                  value={this.state.password}
                  onChange={this.onChange}
                  error={errors.password}
                />
                <TextFieldGroup
                  name="password2"
                  placeholder="Confirm Password"
                  type="password"
                  value={this.state.password2}
                  onChange={this.onChange}
                  error={errors.password2}
                />
                <input
                  type="submit"
                  className="btn btn-warning btn-block mt-4 border border-dark"
                  value="Sign me up!"
                />
              </form>
              <div className="text-center">
                <Separator color="dark-gray" marginTop="4" marginBottom="2" length="12" />
                <p>Or register with:</p>
                <Link href="/api/auth/facebook">
                  <button className="border-0 mx-2">
                    <i className="fab fa-facebook-square fa-4x text-primary" />
                  </button>
                </Link>
                {/* <button className="border-0 mx-4 p-0">
                  <i className="fab fa-twitter-square fa-4x text-info" />
                </button> */}
                <Link href="/api/auth/steam">
                  <button className="border-0 mx-2 p-0">
                    <i className="fab fa-steam-square fa-4x text-dark" />
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Register.propTypes = {
  registerUser: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated,
  errors: state.auth.errors
});

export default connect(
  mapStateToProps,
  { registerUser }
)(Register);

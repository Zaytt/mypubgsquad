import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Link from 'next/link';
import Router from 'next/router';
import { loginUser, loginUserFacebook } from '../../redux/actions/authActions';
import TextFieldGroup from '../common/TextFieldGroup';
import Separator from '../common/Separator';
import { isEmpty } from '../../utils/Util';

class Login extends Component {
  state = {
    email: '',
    password: '',
    errors: {}
  };

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();
    const user = {
      username: this.state.email,
      password: this.state.password
    };

    const res = this.props.loginUser(user);
  };

  facebookLogin = async () => {
    // const res = await this.props.loginUserFacebook();
    // console.log('From Client:');
    // console.log(res);
    Router.push('/api/auth/facebook');
  };

  shouldComponentUpdate(nextProps, nextState) {
    if (!this.props.auth.isAuthenticated && nextProps.auth.isAuthenticated) {
      return false;
    } else {
      return true;
    }
  }

  componentDidMount() {
    if (this.props.isAuthenticated) {
      Router.push('/dashboard');
    }
  }

  componentWillReceiveProps(newProps) {
    if (newProps.auth.isAuthenticated) {
      Router.push('/dashboard');
    }

    if (newProps.auth.errors) {
      this.setState({ errors: newProps.auth.errors });
    }
  }

  renderAlreadyLoggedIn() {
    return (
      <div>
        <h2 className="display-4 text-center mb-5">You're already logged in</h2>
        <p>
          Were you looking for the
          <Link href="/logout">
            <a>Dashboard?</a>
          </Link>
        </p>
      </div>
    );
  }

  renderLoginForm() {
    const { errors } = this.state;
    return (
      <div>
        <h1 className="display-4 text-center mb-5">Login to your account</h1>
        <form noValidate onSubmit={this.onSubmit}>
          <TextFieldGroup
            name="email"
            placeholder="Email Address"
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
          <input
            type="submit"
            className="btn btn-warning btn-block mt-4 mb-4 border border-dark"
            value="Log in"
          />
        </form>
        {isEmpty(this.state.errors) ? (
          ''
        ) : (
          <div className="text-center">
            <Link href="/password/reset">
              <a>Forgot your password?</a>
            </Link>
          </div>
        )}
        <div className="text-center">
          <Separator color="dark-gray" marginTop="4" marginBottom="2" length="12" />
          <p>Or login with:</p>
          <Link href="/api/auth/facebook">
            <button className="border-0 mx-2">
              <i className="fab fa-facebook-square fa-4x text-primary" />
            </button>
          </Link>

          {/* <button className="border-0 mx-2">
            <i className="fab fa-twitter-square fa-4x text-info" />
          </button> */}
          <Link href="/api/auth/steam">
            <button className="border-0 mx-2 p-0">
              <i className="fab fa-steam-square fa-4x text-dark" />
            </button>
          </Link>
        </div>
      </div>
    );
  }

  render() {
    const { isAuthenticated } = this.props.auth;

    return (
      <div className="login mt-3 full-height">
        <div className="container">
          <div className="row">
            <div className="col-10 col-md-8 col-lg-6 m-auto">
              {isAuthenticated ? this.renderAlreadyLoggedIn() : this.renderLoginForm()}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Login.propTypes = {
  loginUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { loginUser, loginUserFacebook }
)(Login);

// export default connect(mapStateToProps)(Login);

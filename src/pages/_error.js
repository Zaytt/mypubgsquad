/**
 * Creating a page named _error.js lets you override HTTP error messages
 */
import React from 'react';
import Link from 'next/link';
import { withRouter } from 'next/router';
import Layout from '../components/layout';

class ErrorPage extends React.Component {
  static propTypes() {
    return {
      errorCode: React.PropTypes.number.isRequired,
      url: React.PropTypes.string.isRequired
    };
  }

  static getInitialProps({ res, xhr }) {
    const errorCode = res ? res.statusCode : xhr ? xhr.status : null;
    return { errorCode };
  }
  render() {
    var response;
    switch (this.props.errorCode) {
      case 200: // Also display a 404 if someone requests /_error explicitly
      case 401:
        response = (
          <Layout title="Unauthorized| MYPUBGSQUAD.com">
            <div className="pt-5 container text-center full-height">
              <h1 className="display-4 ">Registered users only</h1>
              <p>You must be a registered user to view this content.</p>
              <p>
                <Link href="/login">
                  <a>Login</a>
                </Link>{' '}
                or{' '}
                <Link href="/login">
                  <a>Register</a>
                </Link>{' '}
                to view this content
              </p>
            </div>
          </Layout>
        );
      case 404:
        response = (
          <Layout title="Page Not Found | MYPUBGSQUAD.com">
            <div className="pt-5 container text-center full-height">
              <h1 className="display-4 ">Page Not Found</h1>
              <p>
                The page <strong>{this.props.router.asPath}</strong> does not exist.
              </p>
              <p>
                <Link href="/">
                  <a>Go Home</a>
                </Link>
              </p>
            </div>
          </Layout>
        );
        break;
      case 500:
        response = (
          <Layout title="Internal Server Error| MYPUBGSQUAD.com">
            <div className="pt-5 container text-center">
              <h1 className="display-4">Internal Server Error</h1>
              <p>An internal server error occurred.</p>
            </div>
          </Layout>
        );
        break;
      default:
        response = (
          <Layout title="Internal Server Error| MYPUBGSQUAD.com">
            <div className="pt-5 container text-center">
              <h1 className="display-4">HTTP {this.props.errorCode} Error</h1>
              <p>
                An <strong>HTTP {this.props.errorCode}</strong> error occurred while trying to
                access <strong>{this.props.router.pathname}</strong>
              </p>
            </div>
          </Layout>
        );
    }

    return response;
  }
}

export default withRouter(ErrorPage);

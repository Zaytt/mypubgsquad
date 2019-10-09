import React from 'react';
import App, { Container } from 'next/app';
import { Provider } from 'react-redux';
import withRedux from 'next-redux-wrapper';
import { initStore } from '../redux/store';
import { authenticateAction, deAuthenticateAction } from '../redux/actions/authActions';

class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {};
    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }
    if (ctx.req && ctx.req.session.passport) {
      const { user } = ctx.req.session.passport;
      if (user) {
        ctx.store.dispatch(authenticateAction(user));
      } else {
        ctx.store.dispatch(deAuthenticateAction());
      }

      pageProps.user = user;
    }
    return { pageProps };
  }

  constructor(props) {
    super(props);
    this.state = {
      user: props.pageProps.user
    };
  }

  render() {
    const { Component, pageProps, store } = this.props;

    // Check if theres a user logged in and store it in redux store
    // if (pageProps.user) store.dispatch(authenticateAction(pageProps.user));

    // Add the user to the component state
    const props = {
      ...pageProps,
      user: this.state.user
    };
    return (
      <Container>
        <Provider store={store}>
          <Component {...props} />
        </Provider>
      </Container>
    );
  }
}

export default withRedux(initStore)(MyApp);

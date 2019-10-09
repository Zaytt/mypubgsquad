import React from 'react';
class Page extends React.Component {
  static async getInitialProps({ req }) {
    let pageProps = {};

    // Checks if theres a user logged in and adds it to the Page's props
    if (req && req.session.passport) {
      pageProps.user = req.session.passport.user;
    }
    return pageProps;
  }
}

export default Page;

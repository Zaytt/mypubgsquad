const withFonts = require('next-fonts');
const withCSS = require('@zeit/next-css');

module.exports = withCSS(
  withFonts({
    env: {
      API_KEY: process.env.PUBG_KEY
    },
    webpack: (config) => {
      config.plugins = config.plugins || [];

      return config;
    },
    exportPathMap() {
      return {
        '/': { page: '/' },
        '/about': { page: '/about' }
      };
    }
  })
);

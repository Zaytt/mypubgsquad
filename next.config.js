const withFonts = require('next-fonts');
const withCSS = require('@zeit/next-css');

module.exports = withCSS(
  withFonts({
    webpack: config => {
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

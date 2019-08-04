const withFonts = require('next-fonts');
const withCSS = require('@zeit/next-css');
module.exports = withCSS(
  withFonts({
    webpack: config => {
      // Fixes npm packages that depend on `fs` module
      config.node = {
        fs: 'empty'
      };

      return config;
    }
  })
);

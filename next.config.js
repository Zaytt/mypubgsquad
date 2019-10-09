const withFonts = require('next-fonts');
const withCSS = require('@zeit/next-css');
require('dotenv').config();

module.exports = withCSS(
  withFonts({
    webpack: config => {
      config.plugins = config.plugins || [];

      return config;
    }
  })
);

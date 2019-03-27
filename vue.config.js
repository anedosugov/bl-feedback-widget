const PurgecssPlugin = require('purgecss-webpack-plugin');
const glob = require('glob-all');
const path = require('path');

module.exports = {
  filenameHashing: false,
  css: {
    loaderOptions: {
      sass: {
        data: `
          @import "@/styles/main.scss";
        `
      }
    }
  },
  configureWebpack: {
    optimization: {
      splitChunks: false,
    },
    plugins: [
      new PurgecssPlugin({
        paths: glob.sync([
          path.join(__dirname, './**/*.vue'),
          path.join(__dirname, './src/**/*.vue'),
          path.join(__dirname, './src/**/*.js')
        ]),
        whitelist: [],
        whitelistPatterns: []
      })
    ]
  }
}
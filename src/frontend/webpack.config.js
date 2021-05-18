const path = require('path');
const flags = require("./gulpfile.js/config/flags");
const webpack = require('webpack');

module.exports = {  
  // plugins: [
  //   new webpack.optimize.LimitChunkCountPlugin({
  //       maxChunks: 1
  //   })],
  entry: './src/js/app.js',
  output: {
    filename: 'app.js',
    path: path.resolve(__dirname, 'dist')
  },
  mode: flags.minify ? "production" : "development",
  module: {
    rules: [
      {
        test: /\.(scss)$/,
        use: [
          {
            // Adds CSS to the DOM by injecting a `<style>` tag
            loader: 'style-loader'
          },
          {
            // Interprets `@import` and `url()` like `import/require()` and will resolve them
            loader: 'css-loader'
          },
          {
            // Loader for webpack to process CSS with PostCSS
            loader: 'postcss-loader',
            options: {
              plugins: function () {
                return [
                  require('tailwindcss'),
                  require('autoprefixer'),
                ];
              }
            }
          },
          {
            // Loads a SASS/SCSS file and compiles it to CSS
            loader: 'sass-loader'
          }
        ]
      }
    ]
  }
};
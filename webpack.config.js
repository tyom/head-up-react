const precss = require('precss');
const autoprefixer = require('autoprefixer');
const colorFunction = require("postcss-color-function");
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    path: 'dist',
    filename: 'bundle.js'
  },
  devtool: 'source-map',
  module: {
    loaders: [
      {
        test: /\.css$/,
        include: /src/,
        loader: 'style!css?modules&localIdentName=[local]_[hash:base64:4]&sourceMap!postcss?sourceMap'
      },
      {
        test: /\.js$/,
        include: /src/,
        loader: 'babel'
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/layout.html'
    })
  ],
  postcss: () => [
    autoprefixer({
      browsers: ['> 10%', 'last 2 versions']
    }),
    colorFunction,
    precss
  ],
  devServer: {
    stats: {
      chunks: false,
      children: false
    }
  }
};

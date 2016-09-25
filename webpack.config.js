const precss = require('precss');
const autoprefixer = require('autoprefixer');
const colorFunction = require("postcss-color-function");
const postcssHidden = require("postcss-hidden");
const postcssSize = require("postcss-size");
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
        test: /\.jsx?$/,
        include: [
          /node_modules\/react-icons/,
          /src/
        ],
        loader: 'babel'
      },
      {
        test: /\.(otf|eot|png|svg|ttf|woff|woff2)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: 'url?limit=8192'
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
    postcssHidden,
    postcssSize,
    precss
  ],
  devServer: {
    stats: {
      chunks: false,
      children: false
    }
  }
};

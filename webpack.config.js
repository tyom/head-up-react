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
        loader: 'style!css?sourceMap'
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
  devServer: {
    stats: {
      chunks: false,
      children: false
    }
  }
};
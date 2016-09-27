const Config = require('webpack-config').Config;
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = new Config()
  .extend('./webpack.config.prod.js')
  .merge({
    entry: './example/index.js',
    plugins: [
      new HtmlWebpackPlugin({template: './example/layout.html'})
    ],
    devServer: {
      contentBase: 'example/',
      stats: {
        chunks: false,
        children: false
      },
    }
  });

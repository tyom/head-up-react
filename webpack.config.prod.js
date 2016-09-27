const Config = require('webpack-config').Config;

module.exports = new Config()
  .extend('./webpack.config.base.js')
  .merge({
    entry: './src/index.js',
    output: {
      path: 'dist',
      filename: 'head-up.js'
    },
    devtool: 'source-map',
    module: {
      loaders: [
        {
          test: /\.jsx?$/,
          include: [
            /node_modules\/react-icons/,
            /src|example/
          ],
          loader: 'babel'
        }
      ]
    },
  });

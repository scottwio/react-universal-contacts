var path = require('path');
var webpack = require('webpack');
var CopyWebpackPlugin = require('copy-webpack-plugin');
var env = 'DEV';

const webpackConfig = {
  resolve: {
    modulesDirectories: ['node_modules', 'shared'],
    extensions: ['', '.js', '.jsx']
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loaders: ['react-hot', 'babel']
      },
      {
        test: /\.scss$/,
        loaders: ["style", "css", "sass"]
      }
    ]
  },
  devtool: 'inline-source-map',
  devServer: {
    hot: true,
    proxy: {
      '*': 'http://127.0.0.1:' + (process.env.PORT || 3000)
    },
    host: '127.0.0.1',
    outputPath: path.join(__dirname, 'build')
  }
}

// entry
webpackConfig.entry = [
  'webpack-dev-server/client?http://127.0.0.1:8080/',
  'webpack/hot/only-dev-server',
  './client',
  './shared/assets/scss'
];

//output
webpackConfig.output = {
  path: path.join(__dirname, 'dist'),
  filename: 'bundle.js'
};

// Plugins
webpackConfig.plugins = [];

if (env === 'DEV') {
  webpackConfig.plugins.push(
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  )
} else if (env === 'PROD') {
  webpackConfig.plugins.push(
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.optimize.DedupePlugin(),
    new CopyWebpackPlugin([{ from: 'shared/assets' }, {to:'assets'}]),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        unused: true,
        dead_code: true,
        warnings: false
      }
    })
  )
}

module.exports = webpackConfig;
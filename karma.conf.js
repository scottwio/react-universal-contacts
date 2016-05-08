// Karma configuration
// Generated on Sat May 07 2016 20:00:00 GMT+0100 (BST)
var webpackConfig = require('./webpack.config.js');


webpackConfig.externals = {
  'cheerio': 'window',
  'react/addons': true,
  'react/lib/ExecutionEnvironment': true,
  'react/lib/ReactContext': true
}

module.exports = function(config) {
  config.set({
    basePath: '',
    frameworks: ['jasmine'],
    files: [
      'tests.webpack.js'
    ],
    exclude: [
    ],
    preprocessors: {
      'tests.webpack.js': ['webpack'],
    },
    webpack: webpackConfig,
    reporters: ['progress'],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: ['PhantomJS'],
    singleRun: false,
    concurrency: Infinity
  });
};

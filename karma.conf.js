const webpackConfig = require('./webpack.config.js');

module.exports = (config) => {
  config.set({
    browsers: ['Chrome'], // which browsers to run tests on   [1]
    singleRun: true, // run all tests and exit with a 0 ir a 1
    frameworks: ['mocha'], // testing frameworks to use   [2]
    files: ['app/tests/**/*.test.jsx'], // match all files (even in subfolders ** that match .test.jsx)
    preprocessors: { // apply certain processors to certain filetypes
      'app/tests/**/*.test.jsx': ['webpack', 'sourcemap'] // first run all files through webpack [3]
    },
    reporters: ['mocha'], // run reports in the mocha style [4]
    client: {
      mocha: { // after 5 seconds, if a test hasnt finished, cancel it
        timeout: '5000'
      },
      webpack: webpackConfig, // use our established webpack config
      webpackServer: {
        noInfo: true
      }
    }
  })
}


// Depending on the settings in this file, you will need various
// plugins to make this work:
// ==========
// [1] 'Chrome' requires karma-chrome-launcher plugin
// [2] 'mocha' requires karma-mocha plugin
// [3] ['webpack', 'sourcemap'] requires karma-webpack and karma-sourcemap-loader plugins
// [4] 'mocha' requires the karma-mocha-reporter plugin

// Karma configuration
// Generated on Tue Sep 05 2017 09:57:25 GMT-0400 (EDT)

// Note: the important areas to check are files, preprocessors, webpack and
// webpackMiddleware.
module.exports = function(config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',


    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['mocha', 'chai', 'sinon'],


    // list of files / patterns to load in the browser. Not sure if we can make
    // this recursive or not. These files will be used as webpack entry points,
    // but we need to list the same thing below in preprocessors.
    // TODO can we make this recursive? Like just setup a test directory?
    files: [
      './*.spec.js'
    ],


    // list of files to exclude
    exclude: [],


    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    // List which files get piped through which preprocessors. In this case, all
    // of our test files will be routed through webpack.
    preprocessors: {
      "./*.spec.js": ["webpack"]
    },

    // We can con­ﬁg­ure web­pack in karma (thanks to the karma-web­pack mod­ule) by
    // pass­ing the we­back con­ﬁg­u­ra­tion via this webpack prop­erty.
    webpack: require("./webpack.config.js"),

    // Allows us to configure some webpack specific options. In this case, we're
    // only keeping the console output clean.
    webpackMiddleware: {
      stats: "errors-only"
    },

    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['progress'],


    // web server port
    port: 9876,


    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,


    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['ChromeWithoutSecurity'],

    customLaunchers: {
      ChromeWithoutSecurity: {
        base: 'Chrome',
        flags: ['--disable-web-security']
      }
    }

    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    // This can be overridden via our npm scripts in package.json
    singleRun: false,

    // Concurrency level
    // how many browser should be started simultaneous
    concurrency: Infinity
  })
}

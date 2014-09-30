

// Karma configuration
// Generated on Tue Feb 18 2014 20:53:36 GMT+0530 (IST)

module.exports = function(config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '../..',


    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['jasmine'],


    // list of files / patterns to load in the browser
    files: [
      // Application Code //
      'vendor/scripts/angular/angular.js',
      'vendor/scripts/angular/angular-*.js',

      'vendor/scripts/datavore/dv.js',
      'vendor/scripts/distributome/core.js',
      // 'vendor/scripts/**/*.js',
      'vendor/scripts/**/*.coffee',
      //'app/scripts/**/*.js',
      'app/scripts/**/*.coffee',

      // Javascript //
     
      'test/vendor/angular/angular-mocks.js',

      // Specs //

      // CoffeeScript //
      'test/unit/**/*.spec.coffee'

      // Javascript //
      // 'test/unit/**/*.spec.js'
      
    ],


    // list of files to exclude
    exclude: [
      
    ],

    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
      '**/*.coffee': 'coffee'
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
    browsers: ['Firefox'],


    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: true,

     plugins: [
      'karma-jasmine',
      'karma-chrome-launcher',
      'karma-firefox-launcher',
      'karma-coffee-preprocessor',
      'karma-commonjs'
    ]
  });
};


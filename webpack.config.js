const path = require("path");
const webpack = require("webpack");

module.exports = {
  // Tells webpack where to find our entry file, or where our javascript app
  // starts.
  entry: {
    script: path.resolve(__dirname, "./entry.js")
  },

  // All content and source files will be piped through the module.rules
  // section in order to determine which loader is used. In this case, we're
  // piping all .js files through babel-loader.
  module: {
    rules: [
      {
        test: /\.js$/,
        use: "babel-loader",
        exclude: /(\/node_modules\/|test\.js|\.spec\.js$)/
      }
    ]
  },

  // All processed content is sent to the this path and filename.
  output: {
    path: "./dist",
    filename: "script.js",
    pathinfo: true
  },

  // Any files referenced by our entry file will be run through here. In this
  // case, any .js extension will be looked for either in the current directory
  // or where all of our dependencies are, the node_modules directory.
  resolve: {
    extensions: [".js"],
    modules: [
      __dirname,
      path.resolve(__dirname, "./node_modules")
    ]
  }
};

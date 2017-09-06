const path = require("path");
const webpack = require("webpack");

module.exports = {
  // Tells webpack where to find our entry file, or where our javascript app
  // starts.
  // From website:
  // This has­n’t changed so much since 1.x, and it al­lows us to spec­ify the
  // en­try points into our ap­pli­ca­tion. Webpack works by scan­ning source ﬁles
  // for ref­er­ences to other ﬁles, and then con­tin­ues by scan­ning them also.
  // Weback will in­clude all ref­er­enced ﬁles in the build out­put pro­vid­ing that
  // the en­tries con­nect to them. You can have mul­ti­ple en­tries which will build
  // mul­ti­ple out­puts.
  entry: {
    script: path.resolve(__dirname, "./entry.js")
  },

  // All content and source files will be piped through the module.rules
  // section in order to determine which loader is used. In this case, we're
  // piping all .js files through babel-loader.
  // From website:
  // This was orig­i­nally module.loaders, but module.rules now al­lows us to write
  // a more in­tu­itive rule­set for our con­tent load­ers. This is where we spec­ify
  // what ﬁle types are processed by what load­ers. We’re only us­ing JavaScript
  // for this pro­ject, so we can pipe all *.js ﬁles into babel-loader.
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
  // From website:
  // This also has­n’t changed much - we can sim­ply spec­ify an out­put di­rec­tory
  // and ﬁle­name. pathinfo sim­ply in­cludes com­ments about which ﬁle a
  // import->require con­verted state­ment refers to.
  output: {
    path: path.resolve(__dirname, "./dist"),
    filename: "script.js",
    pathinfo: true
  },

  // Any files referenced by our entry file will be run through here. In this
  // case, any .js extension will be looked for either in the current directory
  // or where all of our dependencies are, the node_modules directory.
  // From website:
  // The re­solve sec­tion al­lows us to spec­ify some rules for web­pack to fol­low
  // to help it ﬁnd source ﬁles. Ours is pretty generic, and it also has­n’t
  // changed much from 1.x.
  resolve: {
    extensions: [".js"],
    modules: [
      __dirname,
      path.resolve(__dirname, "./node_modules")
    ]
  }
};

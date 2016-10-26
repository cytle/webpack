const webpack = require('webpack');
const package = require('./package.json');

module.exports = {
  entry: './src/app.js',
  output: {
    path: './bin',
    filename: 'app.js',

    // export itself to a global var
    libraryTarget: "umd",
    // name of the global var: "Foo"
    library: package.name || 'App',
    pathinfo: true,

  },
  externals: {
      // require("jquery") is external and available
      //  on the global var jQuery
      "jquery": "jQuery"
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },

      { test: /\.jade$/, loader: 'jade' },
      // => 'jade' loader is used for '.jade' files

      { test: /\.css$/, loaders: ['style', 'css', 'less'] },
      // => 'style' and 'css' loader is used for '.css' files
    ]
  },

  // plugins: [
  //   new webpack.optimize.UglifyJsPlugin({
  //     compress: {
  //       warnings: false,
  //     },
  //     output: {
  //       comments: false,
  //     },
  //   }),
  // ]
};

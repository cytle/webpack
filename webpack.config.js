const webpack = require('webpack');
const package = require('./package.json');
const path = require("path");

module.exports = {
  entry: {
    app: './src/app.js'
  },
  output: {
    filename: '[name].build.js',

    // export itself to a global var
    libraryTarget: "umd",
    // name of the global var: "Foo"
    library: package.name || 'App',
    pathinfo: true,
    path: path.resolve(__dirname, "build"),
    publicPath: "/assets/",
  },
  externals: {
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

  target: 'web',
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

  devtool: "source-map",

  devServer: {
    contentBase: "build/",
  },

  resolve: {
    alias: {
      widgets: './widgets',
      pages: './pages',
    }
  }
};

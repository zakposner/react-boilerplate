const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const VENDOR_LIBS = [
  'axios', 'react', 'react-dom',
  'react-loading', 'react-router'
];

module.exports = {
  entry: {
    bundle: [
      'script-loader!jquery/dist/jquery.min.js',
      'script-loader!foundation-sites/dist/js/foundation.min.js',
      './app/app.jsx',
    ], // compile app files to bundle.js
    vendor: VENDOR_LIBS // compile vendor files to vendor.js
  },
  externals: {
    jquery: 'jQuery'
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].[chunkhash].js' // cache buster file names
  },
  resolve: {
    alias: { // Modules
      Main: path.resolve(__dirname, 'app/components/Main.jsx')
    },
    extensions: [".js", ".jsx"]
  },
  module: {
    rules: [
      { // ES6 -> ES5
        use: 'babel-loader',
        test: /\.jsx?$/,
        exclude: /node_modules/
      },
      { // css to inline style tag
        use: ['style-loader', 'css-loader'],
        test: /\.css$/
      }
    ]
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({ // chunk common deps together
      names: ['vendor', 'manifest']
    }),
    new HtmlWebpackPlugin({ // auto generate script tags for output files
      template: './app/index.html'
    }),
    new webpack.ProvidePlugin({ // auto load jquery whenever we encounter the following
      '$': 'jquery',
      'jQuery': 'jquery'
    })
  ],
  devtool: 'cheap-module-eval-source-map' // source map
}

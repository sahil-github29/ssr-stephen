const path = require('path');
const merge = require('webpack-merge');
const baseConfig = require('./webpack.base');
const webpackNodeExternals = require('webpack-node-externals');

const config = {
  // inform webpack that we are building a bundle for a nodeJS rather than for the browser
  target: 'node',

  // tell webpack the root/entry file of our server application
  entry: './src/index.js',

  // tell webpack where to put the generated output fil
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'build'),
  },

  

  // this rule tells webpack to not to bundle any library in the
  // output file if the library is inside the node_module folder
  externals: [webpackNodeExternals()],
};

module.exports = merge(baseConfig, config);

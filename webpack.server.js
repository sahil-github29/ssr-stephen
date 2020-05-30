const path = require("path");
const merge = require("webpack-merge");
const baseConfig = require("./webpack.base");

const config = {
  // inform webpack that we are building a bundle for a nodeJS rather than for the browser
  target: "node",

  // tell webpack the root/entry file of our server application
  entry: "./src/index.js",

  // tell webpack where to put the generated output fil
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "build"),
  },
};

module.exports = merge(baseConfig, config);

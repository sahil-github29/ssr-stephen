const path = require("path");

module.exports = {
  // inform webpack that we are building a bundle for a nodeJS rather than for the browser
  target: "node",

  // tell webpack the root/entry file of our server application
  entry: "./src/index.js",

  // tell webpack where to put the generated output fil
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "build"),
  },

  // Tell webpack to run babel on every file it runs through
  module: {
    rules: [
      {
        test: /\.js?$/,
        loader: "babel-loader", // webpack loader module
        exclude: "/node_modules/",
        options: {
          presets: ["@babel/preset-env", "@babel/preset-react"],
        },
      },
    ],
  },
};

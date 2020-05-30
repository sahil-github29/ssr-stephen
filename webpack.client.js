const path = require("path");

module.exports = {
  // tell webpack the root/entry file of our client application
  entry: "./src/client/client.js",

  // tell webpack where to put the generated output fil
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "public"),
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

const path = require("path");

module.exports = {
  mode: 'development', // production,  development
  entry: "./src/index.js",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
  },
};
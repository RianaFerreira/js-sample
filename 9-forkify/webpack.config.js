const path = require("path");   // absolute path

module.exports = {
  entry: "./src/js/index.js",
  output: {
    path: path.resolve(__dirname, "dist/js"),
    filename: "bundle.js"
  }
};

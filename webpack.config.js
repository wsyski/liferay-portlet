const webpack = require("webpack");
const path = require("path");
const pkg = require("./package.json");

module.exports = {
  mode: "development",
  context: process.cwd(),
  resolve: {
    modules: [__dirname, 'node_modules']
  },
  optimization: {
    minimize: false,
    noEmitOnErrors: true
  },
  entry: path.join(__dirname, "node_modules", 'rxjs', 'index.js'),
  output: {
    path: path.join(__dirname, "src"),
    filename: "rxjs.js"
  }
};

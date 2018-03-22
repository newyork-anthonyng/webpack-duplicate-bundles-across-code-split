const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin");

module.exports = {
  context: path.resolve(__dirname, "src"),

  entry: "./app1.js",

  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].bundle.js",
    chunkFilename: "[name].codesplitBundle.js"
  },

  plugins: [new CleanWebpackPlugin(["dist"]), new HtmlWebpackPlugin()]
};

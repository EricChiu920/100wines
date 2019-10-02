var path = require("path");
var HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/index.js",
  plugins: [new HtmlWebpackPlugin({
    template: "./index.html"
  })],
  module: {
    rules: [
      {
        test: /\.css/,
        use: ["style-loader", "css-loader"]
      },
      {
        test: [/\.scss/, /\.sass/],
        use: ["style-loader", "css-loader", "sass-loader"]
      }
    ]
  }
}
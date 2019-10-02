var common = require("./webpack.common");
var merge = require("webpack-merge");
var HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = merge(common, {
  mode: "development",
  plugins: [new HtmlWebpackPlugin({ template: "./src/index.html" })],
  module: {
    rules: [
      {
        test: [/\.scss$/, /\.sass$/],
        use: ["style-loader", "css-loader", "sass-loader"]
      },
    ]
  },
  devtool: 'eval-source-map'
});

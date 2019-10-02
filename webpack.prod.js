var path = require("path");
var common = require("./webpack.common");
var merge = require("webpack-merge");
var MiniCssExtractPlugin = require("mini-css-extract-plugin");
var HtmlWebpackPlugin = require("html-webpack-plugin");
var OptimizeCssAssetsPlugin = require("optimize-css-assets-webpack-plugin");
var TerserPlugin = require("terser-webpack-plugin");
var { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = merge(common, {
  output: {
    filename: "main-[contentHash].js",
    path: path.resolve(__dirname, "dist")
  },
  mode: "production",
  optimization: {
    minimizer: [new OptimizeCssAssetsPlugin(), new TerserPlugin()]
  },
  plugins: [
    new MiniCssExtractPlugin({ filename: "[name]-[contentHash].css" }),
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: "./src/index.html",
      minify: {
        removeAttributeQuotes: true,
        collapseWhitespace: true,
        removeComments: true
      }
    })
  ],
  module: {
    rules: [
      {
        test: [/\.scss$/, /\.sass$/],
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"]
      },
    ]
  }
});

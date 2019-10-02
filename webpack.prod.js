var path = require("path");
var common = require("./webpack.common");
var merge = require("webpack-merge");

module.exports = merge(common, {
  output: {
    filename: "main-[contentHash].js",
    path: path.resolve(__dirname, "dist")
  },
  mode: "production"
});

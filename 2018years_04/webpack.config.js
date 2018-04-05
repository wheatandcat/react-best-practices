const path = require("path");
const webpack = require("webpack");

module.exports = {
  devtool: 'source-map',
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "build"),
    filename: "bundle.js"
  },
  devServer: {
    contentBase: path.resolve(__dirname, "build"),
    port: "3000",
    open: true,
    historyApiFallback: true
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: [
          {
            loader: "babel-loader",
            options: {
              presets: ["react-app"]
            }
          }
        ],
        exclude: /node_modules/
      },
      {
        test: /\.(ts|tsx)$/,
        use: "ts-loader"
      }
    ]
  },
  resolve: {
    modules: ["./src", "./node_modules"],
    extensions: [".js", ".jsx"]
  }
};

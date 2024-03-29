const { merge } = require("webpack-merge");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const commonConfig = require("./webpack.common");
const ModuleFederation = require("webpack/lib/container/ModuleFederationPlugin");
const package = require("../package.json");
const devConfig = {
  mode: "development",
  devServer: {
    port: 8081,
    historyApiFallback: {
      index: "index.html"
    }
  },
  plugins: [
    new ModuleFederation({
      name: "marketing",
      filename: "marketing_remoteEntry.js",
      exposes: {
        "./Marketing": "./src/bootstrap"
      },
      //shared: package.dependencies
      shared: {
        react: {
          singleton: true
        },
        "react-dom": {
          singleton: true
        }
      }
    }),
    new HtmlWebpackPlugin({
      template: "./public/index.html"
    })
  ]
};

module.exports = merge(commonConfig, devConfig);

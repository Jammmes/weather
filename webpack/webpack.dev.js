const commonPaths = require("./common-paths");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const DEFAULT_PORT = parseInt(process.env.PORT, 10) || 5000;
const protocol = process.env.HTTPS === "true" ? "https" : "http";
const host = process.env.HOST || "localhost";

module.exports = {
  devtool: "inline-source-map",
  output: {
    pathinfo: true
  },
  devServer: {
    hot: true,
    contentBase: commonPaths.contentBasePath,
    publicPath: "/",
    host: host,
    https: protocol === "https",
    port: DEFAULT_PORT,
    disableHostCheck: true,
    historyApiFallback: true,
    stats: {
      colors: true,
      chunks: false,
      "errors-only": true
    }
  },
  plugins: [
    new HtmlWebpackPlugin({
      inject: true,
      template: commonPaths.contentBasePath + "/index.html"
    }),
    new webpack.WatchIgnorePlugin([/css\.d\.ts$/]),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(),
    new webpack.NoEmitOnErrorsPlugin()
  ],
  module: {
    rules: [
      {
        enforce: "pre",
        test: /\.tsx?$/,
        use: "source-map-loader",
        exclude: "/node_modules/"
      },
      {
        test: /\.scss$/i,
        exclude: [/node_modules/],
        include: commonPaths.srcPath,
        use: [
          {
            loader: 'style-loader',
          },
          'css-loader',
        ],
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
    ]
  }
};

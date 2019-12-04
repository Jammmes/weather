const commonPaths = require("./common-paths");
const webpack = require("webpack");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CompressionWebpackPlugin = require("compression-webpack-plugin");
const UglifyJSPlugin = require("uglifyjs-webpack-plugin");

module.exports = {
  devtool: "source-map",

  optimization: {
    minimize: true,
    minimizer: [
      new UglifyJSPlugin({
        sourceMap: true,
        uglifyOptions: {
          compress: {
            global_defs: {
              __REACT_HOT_LOADER__: undefined
            }
          },
          beautify: false,
          ecma: 6,
          comments: false,
          mangle: false
        }
      })
    ]
  },

  plugins: [
    new HtmlWebpackPlugin({
      inject: true,
      template: commonPaths.contentBasePath + "/index.html",
      minify: {
        removeComments: true,
        collapseWhitespace: true,
        removeRedundantAttributes: true,
        useShortDoctype: true,
        removeEmptyAttributes: true,
        removeStyleLinkTypeAttributes: true,
        keepClosingSlash: true,
        minifyJS: true,
        minifyCSS: true,
        minifyURLs: true
      }
    }),
    new webpack.DefinePlugin({
      "process.env": {
        NODE_ENV: JSON.stringify("production")
      },
      DEBUG: false,
      __DEVTOOLS__: false
    }),
    new MiniCssExtractPlugin({
      filename: "static/css/main.css",
      allChunks: true
    }),
    new CompressionWebpackPlugin({
      filename: "[path].gz[query]",
      algorithm: "gzip",
      test: /\.(js|html|css)$/,
      threshold: 10240,
      minRatio: 0.8
    })
  ],
  module: {
    rules: [
      {
        test: /\.scss$/i,
        exclude: [/node_modules/],
        include: commonPaths.srcPath,
        use: [
          {
            loader: MiniCssExtractPlugin.loader
          },
          "css-loader"
        ]
      },
      {
        test: /\.css$/i,
        use: [
          {
            loader: MiniCssExtractPlugin.loader
          },
          "css-loader"
        ]
      }
    ]
  }
};

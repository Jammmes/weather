
const commonPaths = require("./common-paths");
var CopyWebpackPlugin = require("copy-webpack-plugin");
const path = require('path');
const ForkTsCheckerWebpackPlugin = require("fork-ts-checker-webpack-plugin");

const cssLoaders = [
  {
    loader: 'css-loader',
    options: {
      importLoaders: 1,
      modules: {
        mode: 'local',
        localIdentName: '[name]_[local]_[hash:base64:5]'
      },
      localsConvention: 'camelCase'
    }
  },
  {
    loader: 'postcss-loader',
    options: {
      plugins: () => [
        require('autoprefixer')({
          overrideBrowserslist: ['last 2 versions', 'ie >= 9']
        })
      ]
    }
  }
];

const config = {
  target: "web",
  entry: {
    bundle: "./src/index.tsx"
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js"],
    alias: {
      '@': path.resolve(__dirname, '../src/'),
    }
  },
  output: {
    filename: "static/js/[name].[hash].js",
    path: commonPaths.outputPath,
    chunkFilename: "static/js/[name].chunk.js",
    publicPath: "./"
  },
  optimization: {
    runtimeChunk: true,
    splitChunks: {
      chunks: "all"
    }
  },
  plugins: [
    new ForkTsCheckerWebpackPlugin({ checkSyntacticErrors: true }),
    new CopyWebpackPlugin([{ from: "public" }], {
      ignore: ["*.html"]
    })
  ],
  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.js$/,
        loader: 'source-map-loader',
        exclude: ['/node_modules/']
      },
      {
        test: /\.[tj]s(x?)$/,
        use: [
          {
            loader: 'ts-loader',
            options: {
              happyPackMode: true
            }
          }
        ],
        include: commonPaths.srcPath,
        exclude: /node_modules/
      },
      {
        test: /\.css$/i,
        use: {
          loader: 'css-loader'
        }
      },
      {
        test: /\.scss$/i,
        exclude: [/node_modules/],
        include: commonPaths.srcPath,
        use: [...cssLoaders, { loader: 'sass-loader' }]
      },
      {
        test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]'
            }
          }
        ]
      }
    ]
  }
};

module.exports = config;
